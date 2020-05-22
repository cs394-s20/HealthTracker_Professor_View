import React, { useEffect, useState } from 'react';
import './App.css';
import Firebase from './firebase'
import 'firebase/database';
import Table from './components/Table/Table';
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
				setProfessor({ Name: "Chris Riesbeck", Courses: [cList[0]] })
			}
		}
		db.on('value', handleData, error => alert(error));
		return () => { db.off('value', handleData); };
	}, [db]);

	/*
	  gets temperature (trust me, this is the best way to do it rn b/c it gets the most recent temp)
	  in the future, we can just look for temperatures who's datetime matches today's date instead of the most recent date
	*/

	return (

		<div className="App">
			<header className="App-header">
				<div className='top-nav'>
					{/* maybe lead to professo's temperature? */}
					<a className='prof-name' href="#course">Hello, {professor.Name}!</a>
					{/* ideally a dropdown menu or something */}
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
