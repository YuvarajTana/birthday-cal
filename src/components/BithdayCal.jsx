import React from 'react';

import moment from 'moment';

class BirthdayCal extends React.Component{
	constructor(){
		super();
		this.state = {
			finalList:null
		};
		this.findBirthDays = this.findBirthDays.bind(this);
	}

	findBirthDays(){
		let {bdyList, year} = this.props.appData;
		let finalList = {
			'Mon':[],
			'Tue':[],
			'Wed':[],
			'Thu':[],
			'Fri':[],
			'Sat':[],
			'Sun':[]
		}
		console.log("bdyList", bdyList);
		bdyList.map((by) => {
			let {name,birthday} = by;
			if(name && birthday){
				let day = moment(birthday).format('ddd');
				let yr = moment(birthday).format('YYYY');
				if(yr == year){
					let name = by['name'].split(' ');
					
					console.log("name", name);

					let result = `${name[0].charAt(0)}${name[1].charAt(0)}`;
					finalList[day].push(result);
				}
			}
		});

		let randomColor = () => {
			let letters = '0123456789ABCDEF'.split('');
			let color = '#';
			for (var i = 0; i < 6; i++ ) {
		        color += letters[Math.floor(Math.random() * 16)];
		    }
		    return color;
		}   
			    
			    
 
		console.log("finalList", finalList);
		return Object.keys(finalList).map((Day,j) => {
				let weekDay = finalList[Day];
				console.log("weekDay", weekDay, "Day", Day);

				return (
					<li key = {Day} className="cal__day day--empty" data-day={Day}>
						<div className="day__date"></div>
						<div className="day__people">
						{
							weekDay.map((name,i) => {
			            		return <p 
			            			key = {i} 
			            			styles={
										{
											backgroundColor:randomColor()
										}
			            			}
			            		className={`data-count-${weekDay.length}`} >{name}</p>
							})
						}
			           </div>

			           <span className="birthday-count" >{`${weekDay.length} Birthdays`}</span>
			        </li>
				)
		
		});
		
		
	}

	render(){
		let weekDays = ['mon','tue','wed','thu','fri','sat','sun'];
		console.log("props", this.props);



		function renderDays(){

			return weekDays.map((day) => {
				return (
					<li key = {day} className="cal__day day--empty" data-day={day}>
			            <div className="day__date"></div>
			            <div className="day__people"></div>
			         </li>
				)
			});
		}

		return (
			<div>

		        <ul className="calendar clearfix js-calendar">
		          
		        	{
		        		this.findBirthDays()
		        	}
		         
		        </ul>

			</div>
		)
	}
}


export default BirthdayCal;