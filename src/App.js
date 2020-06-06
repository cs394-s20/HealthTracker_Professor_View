import React, { useEffect, useState } from 'react';
import './App.css';
import Firebase from './firebase'
import 'firebase/database';
import Table from './components/Table/Table 2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [info, setInfo] = useState({ Course: [], Student: [] })
	const [professor, setProfessor] = useState({ Name: "", Courses: [] })
	const db = Firebase.database().ref();

	/*
	  sets state for info (holds everything in db) and current professor logged in
	*/
	useEffect(() => {
		const handleData = snap => {
			if (snap.val()) {
				let sList = [];
				let cList = [];
				for (const student in snap.val()["Student"]) {
					sList.push(snap.val()["Student"][student]);
				}
				for (const course in snap.val()["Course"]) {
					cList.push(snap.val()["Course"][course]);
				}
				setInfo({ Course: cList, Student: sList })
				/* will need to pull professor from firebase here */
				setProfessor({ Name: "", Courses: [] })
			}
		}
		db.on('value', handleData, error => alert(error));
		return () => { db.off('value', handleData); };
	}, [db]);

	return (

		<div className="App">
			<header className="App-header">
				<div className='top-nav'>
					<a className='prof-name' href="#course">Hello, {professor.Name}!</a>
					<a href="#course">Courses</a>
				</div>
				<div class="col-sm-6 col-sm-offset-3 temp-tables">
					<div className='temp-table'>
						{professor.Courses.map((c) =>
							<Table course={c} professor={professor} students={info["Student"]} />
						)}
					</div>
				</div>

			</header>

		</div>
	);
}

export default App;
