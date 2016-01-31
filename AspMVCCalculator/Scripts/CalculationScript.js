// Handles the Change event of the FirstOperandTextBox control.
function textbox1OnChange()
{
    // The value is not empty.
    if (document.getElementById("FirstOperandTextBox").value !== "")
    {
        // Disable the buttons.
        disableButtons();

        // The value is number type.
        if (!isNaN(document.getElementById("FirstOperandTextBox").value))
        {
            // Disable error image.
            enableErrorImage(true, 1);
        }
        // The value is not number type.
        else
        {
            // Enable error image.
            enableErrorImage(false, 1);
        }

        // Enable the buttons.
        enableButton();
    }
    // The value is not empty.
    else
    {
        // Enable the buttons.
        document.getElementById("CalculationCalculateButton").disabled = true;

        // Both values are empty.
        if (document.getElementById("FirstOperandTextBox").value === "" && document.getElementById("SecondOperandTextBox").value === "")
        {
            document.getElementById("ResetButton").disabled = true;
        }
    }
}

// Handles the Change event of the SecondOperandTextBox control.
function textbox2OnChange()
{
    // The value is not empty.
    if (document.getElementById("SecondOperandTextBox").value !== "")
    {
        // Disable the buttons.
        disableButtons();

        // The value is number type.
        if (!isNaN(document.getElementById("SecondOperandTextBox").value))
        {
            // Disable error image.
            enableErrorImage(true, 2);
        }
        // The value is not number type.
        else
        {
            // Enable error image.
            enableErrorImage(false, 2);
        }

        // Enable the buttons.
        enableButton();
    }
    // The value is not empty.
    else
    {
        // Enable the buttons.
        document.getElementById("CalculationCalculateButton").disabled = true;

        // Both values are empty.
        if (document.getElementById("FirstOperandTextBox").value === "" && document.getElementById("SecondOperandTextBox").value === "")
        {
            document.getElementById("ResetButton").disabled = true;
        }
    }
}

// Enables or disables error images.
function enableErrorImage(value, index)
{
    // The first error image.
    if (index === 1)
    {
        document.getElementById("FirstOperandErrorImage").hidden = value;
    }
    // The second error image.
    else if (index === 2)
    {
        document.getElementById("SecondOperandErrorImage").hidden = value;
    }
}

// Enables buttons.
function enableButton()
{
    // At least one TextBox has a not empty value.
    if (document.getElementById("FirstOperandTextBox").value !== "" || document.getElementById("SecondOperandTextBox").value !== "")
    {
        // Enable reset button.
        document.getElementById("ResetButton").disabled = false;

        // Both TextBox has not empty value and both are number.
        if (document.getElementById("FirstOperandTextBox").value !== "" && document.getElementById("SecondOperandTextBox").value !== "" &&
            !isNaN(document.getElementById("FirstOperandTextBox").value) && !isNaN(document.getElementById("SecondOperandTextBox").value))
        {
            // Enable sum button.
            document.getElementById("CalculationCalculateButton").disabled = false;
        }
    }
    // Both TextBox are empty.
    else
    {
        // Disable buttons.
        disableButtons();
    }
}

// Disables the buttons.
function disableButtons()
{
    document.getElementById("CalculationCalculateButton").disabled = true;
    document.getElementById("ResetButton").disabled = true;
}

// Calculate.
function button1OnClick()
{
    document.getElementById("SumTextBox").value = "Eredmény: " + (parseFloat(document.getElementById("FirstOperandTextBox").value) + parseFloat(document.getElementById("SecondOperandTextBox").value));
}

// Reset.
function button2OnClick()
{
    // Empty the TextBox values.
    document.getElementById("FirstOperandTextBox").value = "";
    document.getElementById("SecondOperandTextBox").value = "";
    document.getElementById("SumTextBox").value = "";

    // Hide the Error Images.
    enableErrorImage(true, 1);
    enableErrorImage(true, 2);

    // Disable the buttons.
    disableButtons();
}