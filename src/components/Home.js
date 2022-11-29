import NewsApi from "./newsApi"
import { Pagination } from "react-bootstrap";

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	let active = 2;
	let items = [];
	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>,
		);
	}
	const paginationBasic = (
		<div>
		  <Pagination>{items}</Pagination>
		  </div>
	)
	return (
		<>
			<h2>Home Page</h2>
			<NewsApi />
			{paginationBasic}

		</>
	)
}

export default Home
