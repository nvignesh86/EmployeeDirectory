import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import EmployeeSearch from './../Employee/EmployeeSearch';
import { act } from "react-dom/test-utils";


describe('Employee Search', () => {

    let container = null;
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
    
        it('Employee seach renders without error', () => {
          act(() => {
            render(<EmployeeSearch />, container);
          });
          expect(container.textContent).toContain("Employee Explorer");
        });
    
        
        // Added for suppress some jest unwanted warning 
        const consoleError = console.error;
        beforeAll(() => {
          jest.spyOn(console, 'error').mockImplementation((...args) => {
            if (!args[0].includes('Warning: An update to %s inside a test was not wrapped in act')) {
              consoleError(...args);
            }
          });
        });
    });