import React, { Component } from 'react';
import { CollectionStyle } from './CollectionStyle';
const collection = [
				{	name: 'In Rainbows',
					playlist: 'playlist_1',
					bgColor: 'yellow',
					id: 1 },
				{ name: 'Workingmans Dead',
					playlist: 'playlist_1',
					bgColor: 'grey',
					id: 2 },
				{	name: 'Songs of the Plains',
					playlist: 'playlist_2',
					bgColor: 'orange',
					id: 3 },
				{	name: 'Witches Stew',
					playlist: 'playlist_3',
					bgColor: 'red',
					id: 4 },
				{	name: 'Drinkin and Jivin',
					playlist: 'playlist_3',
					bgColor: 'teal',
					id: 5 }];


class Collection extends Component {
	constructor(props) {
		super(props)
		this.state = {
			collection: collection
		};

		this.onDragOver = this.onDragOver.bind(this);
		this.onDragStart = this.onDragStart.bind(this);
		this.onDrop = this.onDrop.bind(this);
	};

	onDragOver(ev) {
		ev.preventDefault()
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

		this.setState({
			...this.state,
			collection
		});
	};

	render() {
		let playLists = {
			playlist_1: [],
			playlist_2: [],
			playlist_3: [],
		};

		this.state.collection.forEach(t => {
			playLists[t.playlist].push(
				<div className="playlist-item"
							key={t.id}
							onDragStart={e => this.onDragStart(e, t.id)}
							draggable
							style={{backgroundColor: t.bgColor}}>
					{t.name}
				</div>
			);
		});

		return (
			<CollectionStyle>

					<div className="playlist-1"
								style={{border:'1px solid green'}}
								onDragOver={e => this.onDragOver(e)}
								onDrop={e => this.onDrop(e,'playlist_1')}>
						<h3>Playlist 1</h3>
						{playLists.playlist_1}
					</div>

					<div className="playlist-2"
								style={{border:'1px solid white'}}
								onDragOver={e => this.onDragOver(e)}
								onDrop={e => this.onDrop(e,'playlist_2')}>
						<h3>Playlist 2</h3>
						{playLists.playlist_2}
					</div>

					<div className="playlist-3"
								style={{border:'1px solid white'}}
								onDragOver={e => this.onDragOver(e)}
								onDrop={e => this.onDrop(e,'playlist_3')}>
						<h3>Playlist 3</h3>
						{playLists.playlist_3}
					</div>

			</CollectionStyle>
		);
	};
};

export default Collection;