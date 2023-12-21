
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



function Feedback() {

    return (
        <div className='feedback-page'>

            <div className="feedback-content">

                <h1>Previous client feedbacks</h1>

                <Section title="" defaultExpanded="true">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/screenshots/0.png'} alt="girmay's feedback" />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="flase">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/screenshots/2.png'} alt="girmay's feedback" />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="flase">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/screenshots/3.png'} alt="girmay's feedback" />
                        </div>
                    </div>
                </Section>


                <Section title="" defaultExpanded="flase">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/screenshots/4.png'} alt="girmay's feedback" />
                        </div>
                    </div>
                </Section>


                <Section title="" defaultExpanded="flase">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/screenshots/5.png'} alt="girmay's feedback" />
                        </div>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div >
                        <div className='feedback-content'>
                            <img src={process.env.PUBLIC_URL + '/screenshots/1.png'} alt="girmay's feedback" />
                        </div>
                    </div>
                </Section>


            </div>

        </div>
    );
}
export default Feedback;










