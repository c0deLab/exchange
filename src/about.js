import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

const team = 
    `EX-CHANGE is an initiative by the SoA Studio
Committee.  
Co-Directors: Akhil Badjatia and Sarah Rafson  
Design: Stefan Gruber  
Final Review Coordinator: Mary-Lou Arscott  
Development: Denise Mieszkowski  
Assistant: Maddi Johnson  
Graphics: Juan Aranda  
Web: Lukas Hermann  
Crew: Mariana Alberola, Yashwitha Maram Reddy,
      Angela Castellano, Veronica Hernandez Garrido, Carol  
Yuxin Huang, Mohammed Rahman  
Photography: Jai Sawkar, Michael Powell, Joanne Chui,
      Lake Lewis  
Additional Project Assistance: Ilana Curtis,
      Point Line Projects
`;

class About extends Component {
  render() {
    return (
      <div>
        <h1>CMU SoA YEAR-END SHOW</h1>
        <h1>COLLEGE OF FINE ARTS</h1>
        <h1>RECEPTION <div id="dates">6-9PM, MAY 7</div>, 2019</h1>
        <h1>ON VIEW <div id="dates">MAY 6-7</div>, 2019</h1>
        <p>EX-CHANGE is a year-end show and publication
        celebrating the work of the SoA from 1st year to
        PhD. Inaugurated in fall 2017, EX-CHANGE is an
        ongoing opportunity to shine new light on the
        SoA programs and position the work within larger
        questions of research and practice.
        </p>
        <p>
        <Markdown>
            {team}
        </Markdown>
        </p>
      </div>
    );
  }
}

export default About;
