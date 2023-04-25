import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { content } = this.props;

    return (
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
        style={{ maxWidth: "100%" }}
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
          role="document"
          style={{ maxWidth: "900px" }}
        >
          <div className="modal-content" style={{ maxWidth: "900px" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Chi Tiết
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="w-100">
                <thead>
                  <tr>
                    <td>Mã SP</td>
                    <td>Tên SP</td>
                    <td>Hình Ảnh</td>
                    <td>Đơn giá</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{content.id}</td>
                    <td>{content.name}</td>
                    <td>
                      <img
                        src={content.image}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </td>
                    <td>{content.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
