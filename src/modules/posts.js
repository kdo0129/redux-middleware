import * as postsAPI from '../api/posts';
import { reducerUtils } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERORR = 'GET_POSTS_ERORR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERORR = 'GET_POST_ERORR';

export const getPosts = () => async (dispatch) => {
	//요청이 시작됨
	dispatch({ type: GET_POSTS });
	//API를 호출
	try {
		const posts = await postsAPI.getPosts();
		//성공
		dispatch({
			type: GET_POSTS_SUCCESS,
			posts,
		});
	} catch (e) {
		//실패
		dispatch({
			type: GET_POSTS_ERORR,
			error: e,
		});
	}
};

export const getPost = (id) => async (dispatch) => {
	//요청이 시작됨
	dispatch({ type: GET_POST });
	//API를 호출
	try {
		const post = await postsAPI.getPost(id);
		//성공
		dispatch({
			type: GET_POST_SUCCESS,
			post,
		});
	} catch (e) {
		//실패
		dispatch({
			type: GET_POST_ERORR,
			error: e,
		});
	}
};

const initialState = {
	posts: reducerUtils.initial(),
	post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: reducerUtils.loading(),
			};
		case GET_POSTS_SUCCESS:
			return {
				...state,
				posts: reducerUtils.success(action.posts),
			};
		case GET_POSTS_ERORR:
			return {
				...state,
				posts: reducerUtils.error(action.error),
			};
		case GET_POST:
			return {
				...state,
				post: reducerUtils.loading(),
			};
		case GET_POST_SUCCESS:
			return {
				...state,
				post: reducerUtils.success(action.post),
			};
		case GET_POST_ERORR:
			return {
				...state,
				post: reducerUtils.error(action.error),
			};
		default:
			return state;
	}
}
