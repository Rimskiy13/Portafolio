import csharp from './../Images/c.png'
import cpp from './../Images/cpp.png'
import java from './../Images/java.png'
import javascript from './../Images/javascript.png'
import python from './../Images/python.png'
import php from './../Images/php.png'
import react from './../Images/react.png'
import tailwind from './../Images/tailwind.png'
import mui from './../Images/mui.png'
import ant from './../Images/ant.svg'
import html from './../Images/html.png'
import css from './../Images/css3.png'
import mysql from './../Images/mysql.png'
import postgre from './../Images/postgrees.png'
import mongo from './../Images/mongo.png'
import canva from './../Images/canva.png'
import figma from './../Images/figma.png'
import trello from './../Images/trello.png'
import jira from './../Images/jira.png'
import git from './../Images/github.png'


function Experience() {
  return (
    <div className="experience text-center px-5 lg:px-30 gap-5 lg:gap-10 " id="experience">
      <div className="text-gray-900 text-5xl font-bold">Conocimientos</div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2  py-10">
        <div className="ring-1 ring-stone-500 p-10 rounded-3xl py-20">
          <div className="text-gray-900 p text-3xl font-bold">Lenguajes de Programación</div>

          <div className="grid grid-cols-2 lg:grid-cols-3">
            <div className="flex py-5">
              <img src={csharp} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">C#</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={cpp} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">C++</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={java} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">Java</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={javascript} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">JavaScript</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={python} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">Python</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={php} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">PHP</div>
              </div>
            </div>

          </div>

        </div>
        <div className="ring-1 ring-stone-500 p-10 rounded-3xl py-20">
          <div className="text-gray-900 text-3xl font-bold">Frontend</div>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <div className="flex py-5">
              <img src={react} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">React</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={tailwind} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">Tailwind</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={mui} className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">Material UI</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={ant} className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">Ant Design</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={html} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">HTML</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={css} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">CSS</div>
              </div>
            </div>

          </div>
        </div>

        <div className="ring-1 ring-stone-500 p-10 rounded-3xl py-20">
          <div className="text-gray-900 p text-3xl font-bold">Base de Datos</div>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <div className="flex py-5">
              <img src={mysql} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">MySQL</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={postgre} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">PostgreSQL</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={mongo} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">MongoDB</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ring-1 ring-stone-500 p-10 rounded-3xl py-20">
          <div className="text-gray-900 p text-3xl font-bold">Herramientas de Diseño</div>
          <div className="grid grid-cols-2 lg:grid-cols-2 px-20">
            <div className="flex py-5">
              <img src={canva} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">Canva</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src={figma} className="h-15" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">Figma</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-20 col-span-2">
          <div className="ring-1 ring-stone-500  py-20 rounded-3xl ">
            <div className="text-gray-900 p text-3xl font-bold">Administración de Proyectos</div>
            <div className="grid grid-cols-2 lg:grid-cols-3 px-10">
              <div className="flex py-5">
                <img src={trello} className="h-15" />
                <div className="flex flex-col justify-center items-start">
                  <div className="text-gray-900 text-md font-bold">Trello</div>
                </div>
              </div>
              <div className="flex py-5">
                <img src={jira} className="h-15" />
                <div className="flex flex-col justify-center items-start">
                  <div className="text-gray-900 text-md font-bold">Jira</div>
                </div>
              </div>
              <div className="flex py-5">
                <img src={git} className="h-15" />
                <div className="flex flex-col justify-center items-start">
                  <div className="text-gray-900 text-md font-bold">GitHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Experience;