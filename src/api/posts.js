const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
	{
		id: 1,
		title: '리덕스 미들웨어를 배워봅시다.',
		body: '만들어야 이해하기 쉽다.',
	},
	{
		id: 2,
		title: '안녕하세요????',
		body: 'redux-thunk를 사용해서 비동기 처리를 합시다.',
	},
	{
		id: 3,
		title: 'redux-saga',
		body: 'redux-saga를 이용해서 비동기 처리를 합시다.',
	},
];

export const getPosts = async () => {
	await sleep(500);
	return posts;
};

export const getPostById = async (id) => {
	await sleep(500);
	return posts.find((post) => post.id === id);
};
