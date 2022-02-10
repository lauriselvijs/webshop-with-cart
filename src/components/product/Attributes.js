import React, { Component } from "react";
import { checkIfHasAttribute } from "../../utils/reduceUtils";
import ProductAttrName from "./ProductAttrName";
import SizeBtn from "../buttons/SizeBtn";
import OptAttributeBtn from "../buttons/OptAttributeBtn";
import ColorBtn from "../buttons/ColorBtn";

export default class Attributes extends Component {
  render() {
    const {
      product,
      textAttrArr,
      selectedSize,
      usbAttribute,
      touchIdAttribute,
      swatchAttrArr,
      selectedColorCode,
      //functions
      selectSizeBtn,
      selectUsbPort,
      selectTouchId,
      selectColorBtn,
    } = this.props;

    return (
      <>
        <div className="text-attribute">
          {checkIfHasAttribute(product, "text") && (
            <div>
              {textAttrArr.map((attribute, index) => (
                <div key={index}>
                  {attribute.name === "Capacity" && (
                    <>
                      <ProductAttrName name={attribute.name} />
                      {attribute.items.map((size, index) => (
                        <SizeBtn
                          key={index}
                          size={size.displayValue}
                          selectSizeButton={selectSizeBtn}
                          selectedSize={
                            selectedSize || attribute.items[0].displayValue
                          }
                        />
                      ))}
                    </>
                  )}

                  {attribute.name === "With USB 3 ports" && (
                    <>
                      <ProductAttrName name={attribute.name} />
                      {attribute.items.map((optAttribute, index) => (
                        <OptAttributeBtn
                          key={index}
                          optionalAttribute={optAttribute.displayValue}
                          selectOptAttrButton={selectUsbPort}
                          selectedOptAttribute={
                            usbAttribute || attribute.items[0].displayValue
                          }
                        />
                      ))}
                    </>
                  )}

                  {attribute.name === "Touch ID in keyboard" && (
                    <>
                      <ProductAttrName name={attribute.name} />
                      {attribute.items.map((size, index) => (
                        <OptAttributeBtn
                          key={index}
                          optionalAttribute={size.displayValue}
                          selectOptAttrButton={selectTouchId}
                          selectedOptAttribute={
                            touchIdAttribute || attribute.items[0].displayValue
                          }
                        />
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="swatch-attribute">
          {checkIfHasAttribute(product, "swatch") && (
            <>
              {swatchAttrArr.map((attribute, index) => (
                <div key={index}>
                  <ProductAttrName name={attribute.name} />
                  {attribute.items.map((color, index) => (
                    <ColorBtn
                      key={index}
                      colorCode={color.value}
                      colorName={color.displayValue}
                      selectColorButton={selectColorBtn}
                      selectedColorCode={
                        selectedColorCode || attribute.items[0].value
                      }
                    />
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      </>
    );
  }
}
