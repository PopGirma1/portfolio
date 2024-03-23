import React from 'react';
import { useCollapse } from 'react-collapsed';

function Section(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                <div className="title">{props.title}</div>
                <div className="icon">
                    <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
                </div>
            </div>
            <div {...getCollapseProps()}>
                <div className="collapse">
                    {props.children}
                </div>
            </div>
        </div>
    );
}


function Certificates() {

    return (
        <div className='feedback-page'>

            <div className="feedback-content">

                <h1>Previous certificates</h1>

                <Section title="" defaultExpanded="true">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/Microsoft Power BI Data Analyst Professional Certificate.png'} alt="girmay's certificates" width={700} height={900} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="true">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/IBM Data Analyst Professional Certificate.png'} alt="girmay's certificates" width={700} height={900} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="true">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/1.png'} alt="girmay's certificates" width={700} height={900} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="flase">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/2.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="flase">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/3.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="flase">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/4.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="flase">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/5.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/6.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/7.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/8.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/9.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/10.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/11.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/12.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/13.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/14.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/15.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/16.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/17.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/18.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/19.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/20.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/21.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/22.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/23.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>

                <p> Google </p>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/certificates/24.png'} alt="girmay's certificates" width={700} height={700} />
                        </div>
                    </div>
                </Section>
            </div>

        </div>
    );
}
export default Certificates;