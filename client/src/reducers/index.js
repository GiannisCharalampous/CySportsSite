import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import playerPosts from './playersPosts';
import footballPlayerPosts from './footballPlayersPosts';

export const reducers = combineReducers({ footballPlayerPosts, playerPosts, posts, auth });


