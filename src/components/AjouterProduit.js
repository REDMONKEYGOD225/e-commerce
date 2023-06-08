import React, { Component } from 'react'

export default class AjouterProduit extends Component {
  render() {
    return (
      <div style={{marginLeft: "500px", backgroundColor: "blueviolet", color: "white", height: "300px", width: "400px" }}>
        <form class="row g-3 needs-validation" novalidate>
        <div class="input-group mb-3" style={{marginRight: "500px"}}>
  <input type="file" class="form-control" id="inputGroupFile01"/>
</div> <br/>

  <div class="col-md-4 position-relative">
    <input type="text" class="form-control" id="validationTooltip01" placeholder='NOM' required/>
  </div> <br/>

  <div class="col-md-4 position-relative">
    <input type="text" class="form-control" id="validationTooltip02" placeholder='DESCRIPTION' required/>
  </div> <br/>

  <div class="col-md-4 position-relative">
    <div class="input-group has-validation">
      <input type="number" class="form-control" id="validationTooltipUsername" placeholder='PRIX' aria-describedby="validationTooltipUsernamePrepend" required/>
    </div> <br/>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">ENREGISTRER</button>
  </div>
</form>
      </div>
    )
  }
}
