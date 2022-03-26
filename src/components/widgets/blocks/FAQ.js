import * as React from 'react';
import {Accordion,AccordionSummary,AccordionDetails, Typography,Container} from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class FAQ extends React.Component{
    render(){
        return(
            <Container
              id="FAQ">
            <Typography className='typography__title--medium offer-title'> 
              Preguntas Frecuentes
          </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='FAQ-wrapper'
        >
          <Typography>¿Cómo aporta este aprendizaje al futuro de mi hijo/a?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          El mundo es cada vez más virtual y los problemas son más complejos, por lo que es fundamental que los chicos aprendan a crear soluciones usando el poder de las computadoras, los algoritmos y los datos. 
          Además, podrá desarrollar otras habilidades claves para el siglo XXI como el pensamiento de diseño, la resolución de problemas complejos, el pensamiento crítico, la toma de decisiones, trabajo en equipo y liderazgo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='FAQ-wrapper'
        >
          <Typography>¿Cómo garantizan que aprenderá sobre computación?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Todas las experiencias y actividades en Bootcraft son prácticas. Los chicos resuelven desafíos acompañados por un mentor profesional en ciencias de la computación que les entrega las distinciones claves para incrementar la capacidad de resolución de problemas. Reciben feedback continuo y crean sus propios proyectos aplicando lo aprendido. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className='FAQ-wrapper'
        >
          <Typography>¿Por qué empezar en una edad tan temprana? ¿Comprenderá?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Comenzar jóvenes los coloca por delante en una nueva liga de futuros innovadores, científicos, líderes tecnológicos y emprendedores. 
          <br/>
          Desarrollamos la experiencia en su entorno natural, los videojuegos, lo que conecta a los chicos y les permite mostrar de forma concreta lo que de otra manera sería muy abstracto. Además aprenderán en grupos pequeños y con el acompañamiento cercano de un mentor. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          className='FAQ-wrapper'
        >
          <Typography>¿Por qué aprender en Bootcraft.club?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Hemos creado una experiencia única y gamificada para que tu hijo/a aprenda computación, de la mano de mentores profesionales. Podrá entrenar su capacidad de  resolver problemas complejos completando desafíos de programación en Minecraft, a su propio ritmo y acompañado de una comunidad de jugadores. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          className='FAQ-wrapper'
        >
          <Typography>¿Es necesario tener conocimiento previo o saber jugar Minecraft?  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No es necesario, la ruta inicia desde el nivel básico y va subiendo de nivel progresivamente y a su ritmo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          className='FAQ-wrapper'
        >
          <Typography>¿Cuáles son los requisitos para participar en una clase?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Estar suscrito a Bootcraft</li>
            <li>Contar con un computador con micrófono e internet</li>
            <li>Requisitos mínimos de la computadora:  CPU: Intel Core i3-3210 3.2 GHz / AMD A8-7600 APU 3.1 GHz o equivalente, RAM: 2GB)</li>
            <li>Tener una cuenta Discord</li>
            <li>Descargar Minecraft Education Edition</li>
          </ul> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          className='FAQ-wrapper'
        >
          <Typography>¿Las clases son recuperables?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Las clases son modulares, aunque no son recuperables su hijo/a tendrá oportunidades futuras de retomar la clase. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          className='FAQ-wrapper'
        >
          <Typography>¿Qué pasa después de pagar la suscripción de mi hijo/a?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Una vez realizado el primer pago, será contactado por correo electrónico. Recibirá los horarios disponibles, los requerimientos técnicos con las instrucciones sobre cómo descargar las aplicaciones necesarias y la licencia de Minecraft Education Edition que será de uso exclusivo para su hijo/a durante el tiempo de suscripción. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          className='FAQ-wrapper'
        >
          <Typography>¿Qué pasa si quiero terminar mi suscripción?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En cualquier momento podrá pausar o cancelar su suscripción a Bootcraft.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
    );
    }
}
export default FAQ;