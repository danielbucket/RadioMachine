import React, { Component } from 'react';
import { CollectionStyle } from './CollectionStyle';
import { playlist as collection } from '../../helpers/playlist';


class Collection extends Component {
	constructor(props) {
		super(props)
		this.state = {
			collection: collection,
		};

		this.onDragOver = this.onDragOver.bind(this);
		this.onDragStart = this.onDragStart.bind(this);
		this.onDrop = this.onDrop.bind(this);
		this.generateLists = this.generateLists.bind(this);
	};

	onDragOver(ev) {
		ev.preventDefault();
	};

	onDragStart(ev,id) {
		ev.dataTransfer.setData('id', id);
	};

	onDrop(ev,list) {
		let id = ev.dataTransfer.getData('id');
		let collection = this.state.collection.filter(item => {
			if (item.id == id) {
				item.playlist = list;
			};
			return item
		});

		const newState = Object.assign({}, this.state, collection)

		this.setState({
			newState,
		});
	};

	generateLists() {
		const { collection } = this.state;

		const playlistElements = collection.reduce((listObject,curVal) => {
			if (!listObject[curVal.playlist]) {
				listObject[curVal.playlist] = [];
			};

			listObject[curVal.playlist].push(
				<div className="playlist-item" 
							key={curVal.id}
							onDragStart={e => this.onDragStart(e, curVal.id)}
							draggable>
					<div>Artist: {curVal.artist}</div>
					<div>Album: {curVal.album}</div>
				</div>
			);
			return listObject;
		}, {});

		return Object.keys(playlistElements).map((curVal, i) => {
			const listLength = playlistElements[curVal].length;

			return (
	 			<div className="list-container"
							key={curVal}
							onDragOver={e => this.onDragOver(e)}
							onDrop={e => this.onDrop(e,{curVal})}>
					<div className="playlist-header">
						<h3 className="playlist-name">{curVal}</h3>
						<div className="playlist-song-count">{listLength} Songs</div>
					</div>
					{playlistElements[curVal]}
				</div>
			);
		});
	};

	render() {
		const playlists = this.generateLists();
		const listLength = playlists.length;

		return (
			<CollectionStyle listLength={listLength}>
				{playlists}
			</CollectionStyle>
		);
	};
};

export default Collection;