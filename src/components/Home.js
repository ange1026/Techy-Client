import React, { useEffect, useState } from "react"
import NewsApi from "./NewsApi"
import { Pagination } from "react-bootstrap";
import IMAGE from '../images/tech-img.jpg'



const Home = ({ searchQuery }) => {
	console.log(searchQuery)
	// const { msgAlert, user } = props
	// console.log('props in home', props)
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('')

	useEffect(() => {
		setSearch(searchQuery)
	}, [searchQuery])

	const onPagination = page => {
		window.scrollTo({ top: 0 });
		setPage(page)
	}

	let items = [];
	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === page} onClick={() => onPagination(number)}>
				{number}
			</Pagination.Item>,
		);
	}
	const paginationBasic = (
		<div className="pagination">
			<Pagination size='lg'>{items}</Pagination>
		</div>
	)

	return (
		<>
			<div>
				<img src={IMAGE} alt='' className="home-img" />
				<div className="home-div">A place where you can find the latest news in tech.</div>
			</div>
			<NewsApi page={page} searchQuery={search} />
			{paginationBasic}


		</>
	)
}

export default Home
