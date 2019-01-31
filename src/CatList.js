import React from 'react'

class CatList extends React.Component {

  render(){
    return(
      this.props.catPics.map( cat => {
        return <img src={cat.url}/>
      })
    )
  }

}

export default CatList
