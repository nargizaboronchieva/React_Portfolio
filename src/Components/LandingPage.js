import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>/
             <Grid className="landing-grid">
                 <Cell col={12}>
                     <img
                     src="https://cdn5.vectorstock.com/i/1000x1000/72/59/female-avatar-profile-icon-round-african-american-vector-18307259.jpg>"
                     alt="avatar"
                     className="avatar-img"
                     />
                     <div className ="banner-text">
                         <h1>Full Stack Web Developer</h1>
                         <hr/>
                         <p>HTML/CSS | Bootstrap | JavaScript | Node JS | MongoDB | MySQL | Express| React</p>
                         
                         <div className="social-links">
                             {/*Linkedin */}
                             <a href="http://google.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"  aria-hidden="true"/>
                             </a>
                             {/*GitHub */}
                             <a href="https://github.com/nargizaboronchieva" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"  aria-hidden="true"/>
                             </a>
                             {/*Youtube */}
                             <a href="http://google.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-square"  aria-hidden="true"/>
                             </a>
                         </div>
                     </div>
                 </Cell>
             </Grid>
            </div>
        )
    }
}
export default Landing;