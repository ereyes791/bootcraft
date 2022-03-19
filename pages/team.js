import * as React from 'react';
import {Box,Typography} from '@mui/material/';
import {Footer } from '../src/components/widgets/blocks';
import NavBar from '../src/components/navigation/NavBar'

import ES from '../public/assets/img/EstebanSamuel.png';
import AR from '../public/assets/img/Alejandra.png';
import LP from '../public/assets/img/Luis.jpg';

class Team extends React.Component{
  render(){
    return(
      <Box>
        <NavBar/>
        <section className="team">
          <span className="team-title">
              Nuestro desafío es enseñar como nos <br/> hubiera gustado aprender…
          </span>
          <p className="team-about">
              Somos un equipo de jóvenes profesionales que <br/> quiere transformar la forma en la que aprendemos <br/>sobre ciencias y tecnología. 

          </p>
          <div className="wrapper-team">
            <div className="team-mate">
                <img src={ES.src}  width="150px"alt="" />
                <div className="description">
                  <span className="name">
                    Esteban Samuel Reyes Brito
                  </span>
                  <p className="perks">
                    Ingeniero de Sistemas (Unimet). <br/>
                    3+ Años Desarrollo en proyectos de ingeniería de software.<br/>
                    6+ Años trabajando con Javascript.<br/>
                  </p>
                </div>
            </div>
            <div className="team-mate">
                <img src={AR.src}  width="150px"alt="" />
                <div className="description">
                  <span className="name">
                  Alejandra Estefanía Reyes Casique
                  </span>
                  <p className="perks">
                  Estudiante de psicología<br/>
                  coach de emprendimiento e innovación.<br/>
                  </p>
                </div>
            </div>
            <div className="team-mate">
                <img src={LP.src}  width="150px"alt="" />
                <div className="description">
                  <span className="name">
                    Luis Pereira
                  </span>
                  <p className="perks">
                    Experto en las mecánicas de Minecraft <br/>
                    8+ Años de experiencia en el juego<br/>
                    Entrenador asistente en Bootcraft<br/>
                  </p>
                </div>
            </div>
          </div>
        </section>
        <Footer/>
      </Box>
    );
  }
}
export default Team;