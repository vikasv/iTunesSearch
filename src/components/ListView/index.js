'use strict';

import React from 'react';
import {Media} from 'react-bootstrap';
import './style.less';

class ListView extends React.Component {

    render() {
        return (
            <div className="media--wrapper">
                {
                    this.props.showList.map((item, i) => {
                        const date = new Date(item.releaseDate);
                        return (
                            <Media key={i}>
                                <Media.Left>
                                    <img width={150}  height={150} src={item.artworkUrl100} />
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>{item.trackName} by <a href={item.artistViewUrl} target="_blank">{item.artistName}</a></Media.Heading>
                                    <p><em>Released On:</em> {date.getMonth()+1+'/'+date.getDate()+'/'+date.getFullYear()}</p>
                                    <p><em>Collection Name:</em> {item.collectionName}</p>
                                    <p><em>Price:</em> {item.trackPrice}</p>
                                    <p><em>Track Number:</em> {item.trackNumber}</p>
                                    <p><em>Track time:</em> {item.trackTimeMillis}</p>
                                    <p><em>Genre:</em> {item.primaryGenreName}</p>
                                    {
                                        item.hasOwnProperty('isStreamable') &&
                                            <p><em>Streamable:</em> {String(item.isStreamable)=== 'true' ? 'Yes': 'No'}</p>
                                    }
                                    {
                                        item.contentAdvisoryRating &&
                                            <p><em>Advisory Rating:</em> {item.contentAdvisoryRating}</p>
                                    }

                                </Media.Body>
                            </Media>
                        )
                    })
                }
            </div>
        )
    }
}

export default ListView;