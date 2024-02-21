/* eslint-disable react/prop-types */
import "./deletemodal.css";
const DeleteModal = ({ onCancel, onConfirm }) => {
  return (
    <>
      <div id="myModal" className="modal-test modal fade" tabIndex="-1">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <div className="icon-box">
                <i className="fas fa-times"></i>
              </div>
              <h4 className="modal-title w-100 " style={{ margin: "1rem" }}>
                Are you sure?
              </h4>
            </div>
            <div className="modal-body" style={{ margin: "1rem" }}>
              <p>
                Do you really want to delete these records? This process cannot
                be undone.
              </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default DeleteModal;
