import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Card from "./Card";
import Zoom from "react-reveal/Zoom";

class ResponsiveDialog extends React.Component {
  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <Zoom>
              <Card />
            </Zoom>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.close()} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(ResponsiveDialog);
