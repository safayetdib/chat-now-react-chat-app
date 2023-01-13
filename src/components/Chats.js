import React from 'react';

import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

import { auth } from '../firebase';

const Chats = () => {
	const history = useHistory();

	const handleLogout = async () => {
		await auth.signOut();

		history.push('/');
	};

	return (
		<div className="chats-page">
			<div className="nav-bar">
				<div className="logo-tab">ChatNow</div>
				<div className="logout-tab" onClick={handleLogout}>
					Logout
				</div>
			</div>
			{/* project-id===> 7f40b101-8b50-49db-9ba6-c7dcdd9c9fff */}
			<ChatEngine
				height="calc(100vh - 66px)"
				projectId="7f40b101-8b50-49db-9ba6-c7dcdd9c9fff"
				userName="."
				userSecret="."
			/>
		</div>
	);
};

export default Chats;
