import React from 'react'

const About = () => {
    return (
        <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>About</h1>
                <p>Hello, I'm Nitesh, a passionate Web developer with a keen eye for MERNStack.
                    With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
                </p>
                <br></br>
                <h1 className='text-green-600 font-semibold text-xl'>Education Background</h1>
                <span>[Post-Graduation]: [M. Tech],[Information Technology],[National Institute of Technology Raipur],[2022-2024].</span>
                <br></br>
                <span>[Graduation]: [B.E],[Computer Science Engineering],[Shri Shankaracharya Technical Campus, Bhilai], [2018-2022].</span>
                <br/>
                <br/>

                <h1 className='text-green-600 font-semibold text-xl '>Skills & Expertise</h1>
                <span>Proficient in Programming Languages like C++, Javascript and Familiar with SQL, Python, OPPs concept Experienced with Software Frameworks/Technologies such as ReactJS, NextJS, Tailwind CSS, MongoDB, Machine Learning, Git and Good Hands on Knowledge on Developer tools like Postman, VS Code and GitHub.</span>
                <br/><br/>

                <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
                <span>
                    My mission is to leverage my skills and creativity to deliver innovative Software solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
                </span>
                <br/><br/>

                <h1 className='text-green-600 font-semibold text-xl'>Achievements</h1>
                <ul>
                        <li>Participated in Chhattisgarh Young Scientist</li>
                        <li>10th Position in Samvid Hackathon</li>
                        <li>Research Paper Presented in London University</li>
                </ul>
            </div>
        </div>
    )
}

export default About