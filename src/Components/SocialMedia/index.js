import React, {useState, useEffect} from 'react';
import axios from "axios";
import {SocialMSection, Social, Icon, SocialDesc, Span, SpanInfo} from "./style.js";
const SocialMedia = () => {

    const [social, setSocial] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then(res => {setSocial(res.data.social)});
    },[])
    
    const socialData = social.map(socialItem => {
        return (
                <Social item={socialItem.id} key={socialItem.id}>
                    <Icon className={socialItem.icon}></Icon>
                <SocialDesc>
                    <Span>{socialItem.title}</Span>
                    <SpanInfo className="info2">{socialItem.body}</SpanInfo>
                </SocialDesc>
                </Social>
        )
    })

    return (
        <SocialMSection className="social-media">
            {socialData}
        </SocialMSection>
    )
}

export default SocialMedia;
