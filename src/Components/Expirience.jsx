import csharp from './../Images/c.png';
import cpp from './../Images/cpp.png';
import java from './../Images/java.png';
import javascript from './../Images/javascript.png';
import python from './../Images/python.png';
import php from './../Images/php.png';
import react from './../Images/react.png';
import tailwind from './../Images/tailwind.png';
import mui from './../Images/mui.png';
import ant from './../Images/ant.svg';
import html from './../Images/html.png';
import css from './../Images/css3.png';
import mysql from './../Images/mysql.png';
import postgre from './../Images/postgrees.png';
import mongo from './../Images/mongo.png';
import canva from './../Images/canva.png';
import figma from './../Images/figma.png';
import trello from './../Images/trello.png';
import jira from './../Images/jira.png';
import git from './../Images/github.png';

function Experience() {
  return (
    <div className="experience text-center px-5 sm:px-8 lg:px-20 xl:px-40 gap-5 lg:gap-10" id="experience">
      <div className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold">Conocimientos</div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 py-10">
        {/* Lenguajes de Programación */}
        <div className="ring-1 ring-stone-500 p-5 sm:p-8 rounded-3xl">
          <div className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-bold">Lenguajes de Programación</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 py-5">
            {[{ img: csharp, label: 'C#' }, { img: cpp, label: 'C++' }, { img: java, label: 'Java' }, 
              { img: javascript, label: 'JavaScript' }, { img: python, label: 'Python' }, { img: php, label: 'PHP' }]
              .map((lang, index) => (
                <div key={index} className="flex items-center space-x-3 py-3">
                  <img src={lang.img} className="h-10 md:h-15" alt={lang.label} />
                  <div className="text-gray-900 text-md font-bold">{lang.label}</div>
                </div>
              ))}
          </div>
        </div>
        
        {/* Frontend */}
        <div className="ring-1 ring-stone-500 p-5 sm:p-8 rounded-3xl">
          <div className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-bold">Frontend</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 py-5">
            {[{ img: react, label: 'React' }, { img: tailwind, label: 'Tailwind' }, { img: mui, label: 'Material UI' },
              { img: ant, label: 'Ant Design' }, { img: html, label: 'HTML' }, { img: css, label: 'CSS' }]
              .map((tech, index) => (
                <div key={index} className="flex items-center space-x-3 py-3">
                  <img src={tech.img} className="h-10 md:h-15" alt={tech.label} />
                  <div className="text-gray-900 text-md font-bold">{tech.label}</div>
                </div>
              ))}
          </div>
        </div>
        
        {/* Base de Datos */}
        <div className="ring-1 ring-stone-500 p-5 sm:p-8 rounded-3xl">
          <div className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-bold">Base de Datos</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 py-5">
            {[{ img: mysql, label: 'MySQL' }, { img: postgre, label: 'PostgreSQL' }, { img: mongo, label: 'MongoDB' }]
              .map((db, index) => (
                <div key={index} className="flex items-center space-x-3 py-3">
                  <img src={db.img} className="h-10 md:h-15" alt={db.label} />
                  <div className="text-gray-900 text-md font-bold">{db.label}</div>
                </div>
              ))}
          </div>
        </div>

        {/* Herramientas de Diseño */}
        <div className="ring-1 ring-stone-500 p-5 sm:p-8 rounded-3xl">
          <div className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-bold">Herramientas de Diseño</div>
          <div className="grid grid-cols-2 gap-4 py-5">
            {[{ img: canva, label: 'Canva' }, { img: figma, label: 'Figma' }]
              .map((designTool, index) => (
                <div key={index} className="flex items-center space-x-3 py-3">
                  <img src={designTool.img} className="h-10 md:h-15" alt={designTool.label} />
                  <div className="text-gray-900 text-md font-bold">{designTool.label}</div>
                </div>
              ))}
          </div>
        </div>

        {/* Administración de Proyectos */}
        <div className="ring-1 ring-stone-500 p-5 sm:p-8 rounded-3xl col-span-1 md:col-span-2">
          <div className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-bold">Administración de Proyectos</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 py-5">
            {[{ img: trello, label: 'Trello' }, { img: jira, label: 'Jira' }, { img: git, label: 'GitHub' }]
              .map((projectTool, index) => (
                <div key={index} className="flex items-center space-x-3 py-3">
                  <img src={projectTool.img} className="h-10 md:h-15" alt={projectTool.label} />
                  <div className="text-gray-900 text-md font-bold">{projectTool.label}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
