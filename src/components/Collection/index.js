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
		this.onClick = this.onClick.bind(this);
	};

	onClick(e) {
		console.log('eat shit: ', e)
	};

	onDragOver(ev) {
		ev.preventDefault();
	};

	onDragStart(ev,id) {
		ev.dataTransfer.setData('id', id);
	};

	onDrop(ev,list) {
		const id = ev.dataTransfer.getData('id');
		const newCollection = this.state.collection.filter(item => {
			if (item.id.toString() === id) {
				item.playlist = list.curVal;
			};
			return item;
		});

		this.setState({
			collection:newCollection,
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
							onDragStart={ev => this.onDragStart(ev, curVal.id)}
							draggable>
					<div>Artist: {curVal.artist}</div>
					<div>Album: {curVal.album}</div>
				</div>
			);
			return listObject;
		}, {});

		const elementsList = Object.keys(playlistElements).sort().map((curVal, i) => {
			const listLength = playlistElements[curVal].length;

			return (
	 			<div className="list-container"
	 						onClick={e => this.onClick(e)}
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

		elementsList.push(
			<div className="new-playlist-card"
						key="newPlaylistCard"
						onDragOver={e => this.onDragOver(e)}
						onDrop={e => this.onDrop(e, {curVal:'newPlaylist'})}>
				<div>
					new playlist card
				</div>

			</div>
		);

		return elementsList;
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