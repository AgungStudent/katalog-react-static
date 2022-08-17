import React from 'react'
import ListFooter from './ListFooter'

export default function ComponentFooter({ datas, title, icons }) {
  return (
    <>
      <div className="col-6 col-sm-4 col-lg-auto mb-3" style={{textAlign: 'left'}}>
        <h5 className="mb-5 text-white text-uppercase">{title}</h5>
        <ul className="list-unstyled mb-md-4 mb-lg-0">
          {datas
            ? datas.map((data, i) => (
                <ListFooter
                  icon={icons ? icons[i] : null}
                  content={data}
                  key={i}
                />
              ))
            : null}
        </ul>
      </div>
    </>
  )
}