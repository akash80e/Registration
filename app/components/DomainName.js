var React = require('react');
var ReactDOM = require('react-dom');

var DomainName = React.createClass({
  render: function() {
    return (
      <div className="second">
                <div className="row">
                    <div className="col-md-6">
                    <h1>What web address do you want for your team?</h1>
                    </div>
                    </div>

                       <form className="form-inline">
                       <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                        <label className="labels">Your Team Domain</label>
                        <input type="text"  className="form-control" ref="domain" className="input-type" defaultValue={this.props.fieldValues.domain} required/>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                        <button className="btn btn-success" onClick={this.props.previousStep}>Back</button>
                        <button type="button" className="btn btn-success" onClick={this.saveAndContinue}>Next</button>
                        
                        </div>
                        </div>
                        </div>
                        </form>
                    </div>
                    
                    
    )
  },
  saveAndContinue: function(e){
            e.preventDefault()
            var data = {
                domain: ReactDOM.findDOMNode(this.refs.domain).value
            }
            this.props.saveValues(data)
            this.props.nextStep()
        }
}); 
module.exports = DomainName