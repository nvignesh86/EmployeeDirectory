import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import EmployeeTree from './../Employee/EmployeeTree';
import { act } from "react-dom/test-utils";

describe('Employee Tree', () => {

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
    
    it('EmployeeTree should render without an error using mock json', () => {
        act(() => {
                const resp = [
                    "CEO",
                    {
                    "direct-subordinates": [
                        "Samad Pitt",
                        "Leanna Hogg"
                    ]
                    }
                ];
             fetch.mockResponseOnce(JSON.stringify(resp));  // Mock API Response
             render(<EmployeeTree empName={"John Hartman"} empList={[]} />, container);
        });
        setTimeout(()=> { 
             expect(container.textContent).toContain("Samad Pitt");
        },5000);     
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