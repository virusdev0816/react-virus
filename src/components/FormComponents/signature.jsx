import React from 'react';
import valueMixin from './mixins/valueMixin';
import SignatureCanvas from 'react-signature-canvas';

module.exports = React.createClass({
  displayName: 'Signature',
  mixins: [valueMixin],
  onEnd: function() {
    this.setValue(this.signature.getCanvas().toDataURL());
  },
  componentDidMount: function() {
    if (this.state.value) {
      this.signature.fromDataURL(this.state.value);
    }
    else {
      this.signature.clear();
    }
  },
  clearSignature: function() {
    this.signature.clear();
  },
  getElements: function() {
    const { component } = this.props;
    var footerClass = 'formio-signature-footer' + (component.validate.required ? ' required' : '');
    var ref = component.key;
    var styles = {
      height: component.height,
      width: component.width
    };
    return (
      <div>
        <span className=" glyphicon glyphicon-refresh"  onClick={this.clearSignature}/>
        <div style={styles}>
          <SignatureCanvas
            ref={ (ref) => { this.signature = ref; } }
            minWidth={Number(component.minWidth)}
            maxWidth={Number(component.maxWidth)}
            penColor={component.penColor}
            backgroundColor={component.backgroundColor}
            canvasProps={{
              className: 'signature-canvas'
            }}
            onEnd={this.onEnd}
          />
        </div>
        <div className={footerClass}>{component.footer}</div>
      </div>
    );
  }
});
