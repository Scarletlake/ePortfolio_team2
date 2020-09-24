import React from 'react'
import Button from '@material-ui/core/Button';


export default function TemplatePage(){

    return (
      <div>
       <h1>CHOOSE THE TEMPLATE YOU WANT</h1>
       <Button variant="contained" color="primary" href="/portfolio/editor?temp=art&id=0">
        use this template
      </Button>
      </div>
    )
}
