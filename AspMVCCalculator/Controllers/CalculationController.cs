using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspMVCCalculator.Controllers
{
    /// <summary>
    /// Interaction logic for CalculationController.
    /// </summary>
    public class CalculationController : Controller
    {
        #region Methods

        /// <summary>
        /// The GET controller of the Index view.
        /// </summary>
        /// <returns>The Index view.</returns>
        public ActionResult Index()
        {
            return View();
        }

        #endregion Methods
    }
}