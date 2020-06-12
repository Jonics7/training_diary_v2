import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddProject.sass';

import { Form, Field } from 'react-final-form';

Modal.setAppElement('#root');



export default function AddProject() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="add-project">
            <button
                className="add-neon"
                onClick={() => setModalIsOpen(true)}>
                <span className="button-line button-line-top"></span>
                <span className="button-line button-line-right"></span>
                <span className="button-line button-line-bottom"></span>
                <span className="button-line button-line-left"></span>
                    Add New Project
                </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(34, 34, 38, 0.9)',
                    },
                    content: {
                      position: 'absolute',
                    //   top: '40px',
                    //   left: '40px',
                    //   right: '40px',
                    //   bottom: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '50vw',
                      border: 'none',
                      boxShadow: '0px 0px 0px #2196f3, 0px 0px 30px #2196f3',
                      background: '#222226',
                      overflow: 'auto',
                      color: 'rgb(33, 150, 243)',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '10px',
                      outline: 'none',
                      padding: '20px'
                    }
                  }}
                >
                
                <Form onSubmit = {() => {} }>
                  {({handleSubmit}) => (
                      <form
                      className="add-project-form"
                      onSubmit = {handleSubmit}>
                          <Field
                          name="name"
                          component="input"
                          type="text"
                          placeholder="Project Name"
                          />
                          <Field
                          name="description"
                          component="textarea"
                          type="text"
                          placeholder="Project Description"
                          />
                          <Field
                          name="category"
                          component="select"
                          multiple
                          >
                              <option value="web">Web project</option>
                              <option value="game">Game</option>
                              <option value="script">Script</option>
                              <option value="another">Another</option>
                          </Field>
                          <button type="submit">Add project</button>
                      </form>
                  )}
                </Form>
                <button
                className="modal-close"
                onClick={() => setModalIsOpen(false)}>
                    <span className="close"></span>
                </button>
            </Modal>
        </div>
    )
}
