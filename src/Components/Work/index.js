import {React , Component} from 'react';
import axios from "axios";
import { WorkSection, WorkTitle, TitleSpan, WorkPart, Icon, PartTitle, PartHr, PartDesc } from "./style.js";
class Work extends Component {

    state = {
        works : []
    }

    componentDidMount () {
        axios.get('js/data.json')
        .then(res => {this.setState({ works: res.data.works})});
        console.log(this.state.works);
    }

    render(){
        const works = this.state.works;

        const worksList = works.map((workItem) => {
            return (
                <div>
                    <WorkPart first={workItem.id} key={workItem.id}>
                        <Icon className={workItem.icon_name}></Icon>
                        <PartTitle>{workItem.title}</PartTitle>
                        <PartHr/>
                        <PartDesc>
                            {workItem.body}
                        </PartDesc>
                    </WorkPart>
                </div>
            )
        })

        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><TitleSpan>My</TitleSpan> Work</WorkTitle>
                    {worksList}
                </div>
            </WorkSection>
        )
    }   
}

export default Work;