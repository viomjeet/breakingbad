import React, { Fragment } from 'react'

export default function Characters({ data }) {
    return (
        <Fragment>

            <div className="row">
                {data.map((items, index) => {
                    return (
                        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                            <div className="cus_card" style={{backgroundImage: `url(${items.img})`}}>
                                <h1 className="char_name">{items.name}</h1>
                                <div className="card_img">
                                    <img src={items.img} alt={items.nickname} />
                                </div>
                                <div className="card_body">
                                    <div className="card_body_in">
                                        <div className="card_text">
                                            <h6>Occupation</h6>
                                            <ul>
                                                {items.occupation.map((occupation, index) => {
                                                    return <li key={index}>{index + 1}. {occupation}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </Fragment>
    )
}
