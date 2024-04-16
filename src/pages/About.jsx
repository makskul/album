import React from 'react';
import PageMeta from "../components/Meta/PageMeta";
import PageTitle from "../components/PageTitle";

function About() {
    return (
        <div className={'bg-gray-100 p-4'}>
            <p className={'mb-2'}>
                Hello, My name is <b>Maks Kul</b>.
                I'm a Highly skilled Frontend Developer with: <br/>
                7+ years of experience. Proficient in Sass, JavaScript, Typescript, React and Vue. <br />
                I want to continue working with this stack, and ready to learn new technologies.
            </p>
            <h2 className={'font-semibold'}>What about my skills ?</h2>
            <ul className={'list-disc list-inside mb-3'}>
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
            <p className={'mb-2'}>
                Also i was worked at least of projects for support they in common sense.<br/>
                They are wrote on Node Js + React + Webpack. And I was make a little features and fixes by technical
                tasks.
            </p>
            <h2 className={'font-semibold'}>Languages which I know</h2>
            <ul className={'list-disc list-inside mb-3'}>
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
