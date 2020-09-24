const React = require("react");
const Default = require("./Default");

class Edit extends React.Component {
  render() {
    const { _id, brand, flavor, abv, style, name } = this.props.beer;
    return (
      <Default>
      <div key ={_id}>
        <h1>Edit Page</h1>
        <form onSubmit= {handleSubmit}>
      <label htmlFor="brand">brand</label>
      <input type="text" onChange={(event)=>updateFormInputs({...formInputs, brand:event.target.value})}/>
      <label htmlFor="style">Style</label>
      <input type="text" onChange={(event)=>updateFormInputs({...formInputs, style:event.target.value})}/>
      <label htmlFor="name">name</label>
      <input type="text" onChange={(event)=>updateFormInputs({...formInputs, name:event.target.value})}/>
      <label htmlFor="flavor">flavor</label>
      <input type="text" onChange={(event)=>updateFormInputs({...formInputs, flavor:event.target.value})}/>
      <label htmlFor="abv">abv</label>
      <input type="text" onChange={(event)=>updateFormInputs({...formInputs, abv:event.target.value})}/>
      <input type="submit" className="submit" />
    </form>
      </div>
      </Default>
    );
  }
}

module.exports = Edit;