    (() => {
      "use strict";

      const forms = document.querySelectorAll(".needs-validation");

      Array.from(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();

    // Flash Toast Messages Auto-Dismiss
    (() => {
      const flashToasts = document.querySelectorAll(".flash-toast");
      const dismissTime = 3500; // 3.5 seconds

      flashToasts.forEach((toast) => {
        // Auto-dismiss after 3.5 seconds
        const timer = setTimeout(() => {
          dismissToast(toast);
        }, dismissTime);

        // Close button functionality
        const closeBtn = toast.querySelector(".flash-toast-close");
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            clearTimeout(timer);
            dismissToast(toast);
          });
        }

        // Remove toast from DOM after animation
        toast.addEventListener("animationend", (e) => {
          if (e.animationName === "slideOutRight" || toast.classList.contains("hiding")) {
            toast.remove();
          }
        });
      });

      function dismissToast(toast) {
        if (!toast.classList.contains("hiding")) {
          toast.classList.add("hiding");
        }
      }
    })();

