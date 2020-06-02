import React from 'react'

const IndexPage = (props) => {
    return (
        <section className="p-5">
            <div className="container">
                {
                    props.children
                }
            </div>
        </section>
    )
}
export default IndexPage