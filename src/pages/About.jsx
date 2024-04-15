import React from 'react';
import PageMeta from "../components/Meta/PageMeta";
import PageTitle from "../components/PageTitle";

function About() {
    const pageName = 'about';
    return (
        <div>
            <p>
                Hello, My name is Maks Kul.
                I'm a Highly skilled Frontend Developer with: <br/>
                7+ years of experience. Proficient in <br/>
                Sass, JavaScript, Typescript, React and <br/>
                Vue. I want to continue working with this <br/>
                stack, and ready to learn new <br/>
                technologies.
            </p>
            <h2>What about my skills ?</h2>
            <ul>
                <li>Sass</li>
                <li>Js</li>
                <li>Webpack</li>
                <li>Smarty</li>
                <li>Twig</li>
                <li>Docker</li>
                <li>Vue</li>
                <li>Nuxt</li>
                <li>Bootstrap</li>
                <li>React</li>
            </ul>
            <p>
                Also i was worked at least of projects for support they in common sense.<br/>
                They are wrote on Node Js + React + Webpack. And I was make a little features and fixes by technical
                tasks.
            </p>
            <h2>Languages which I know</h2>
            <ul>
                <li>Russian and Ukrainian - Native</li>
                <li>
                    English - more then just intermediate,
                    but it's to hard for me, to say that I know language on Upper-Intermediate level
                </li>
                <li>Deutsch - elementary - A1</li>
            </ul>
        </div>
    );
}

export default About;
