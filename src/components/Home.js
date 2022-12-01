import NewsApi from "./NewsApi"
import { Pagination } from "react-bootstrap";
import AdvancedExample from "./Pagination";
import IMAGE from '../images/tech-img.jpg'


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
			<div>
				<img src={IMAGE} alt='' style={{width: '100%', maxWidth: '100%', height: '500px', margin: '15px'}}/>
				<div style={{position: 'absolute', bottom: '10px', left: '18px', color: 'blue'}}>A place where you can find the latest news in tech.</div>
			</div>
			<NewsApi />
			{paginationBasic}


		</>
	)
}

export default Home
