import React from 'react';
import IconButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { translate } from 'admin-on-rest';
import { stringify } from 'query-string';
import Icon from 'material-ui/svg-icons/action/pageview';

export const ViewIcon = Icon;

const LinkToProductPage = ({ record, translate }) => (

    <IconButton
        primary
        icon={<ViewIcon />}
        containerElement={<a href={`http://localhost:3001/game-detail/${  record.id}`} target="_blank" />}
    />
);

LinkToProductPage.defaultProps = {
    style: { padding: 0 },
};

export default translate(LinkToProductPage);
