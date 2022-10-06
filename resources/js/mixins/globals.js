import Vue from "vue";
import i18n from "../helpers/i18n";
import store from "../stores/index";
import datatablelanguage from "../helpers/dataTableLanguage";

Vue.mixin({
  methods: {
    successCreateMessage() {
      Toast.fire({
        icon: "success",
        title: i18n.tc("success_message_create"),
      });
    },
    successUpdateMessage() {
      Toast.fire({
        icon: "success",
        title: i18n.tc("success_message_update"),
      });
    },
    successDeleteMessage() {
      Toast.fire({
        icon: "success",
        title: i18n.tc("delete_message"),
      });
    },
    successPublishMessage() {
      Toast.fire({
        icon: "success",
        title: i18n.tc("publish_message"),
      });
    },
    myDataTable() {
      //$("#sampleTable").DataTable().destroy();
      this.$nextTick(() => {
        $("#sampleTable").DataTable({
          bDestroy: true,
          retrieve: true,
          responsive: true,
          lengthMenu: [
            [10, 25, 50, 100, -1],
            [10, 25, 50, 100, "All"],
          ],
          pageLength: 10,
          dom:
            "<'row'<'col-sm-12 col-md-3'l><'col-sm-12 col-md-6 text-center'B><'col-sm-12 col-md-3'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
          buttons: [
            {
              extend: "print",
              text: "<i class='fas fa-print'></i> " + this.$t("Print"),
              titleAttr: "Print",
              className: "btn btn-success btn-sm text-white",
              exportOptions: {
                columns: ":not(.not-export-col)",
              },
            },
            {
              extend: "excelHtml5",
              text: "<i class='fas fa-file-excel'></i>  " + this.$t("Excel"),
              titleAttr: "Export as Excel",
              className: "btn btn-primary btn-sm",
              exportOptions: {
                columns: ":not(.not-export-col)",
              },
            },
            {
              extend: "pdfHtml5",
              text: "<i class='fas fa-file-pdf'></i>  " + this.$t("PDF"),
              titleAttr: "Export as PDF",
              className: "btn btn-success btn-sm",
              exportOptions: {
                columns: ":not(.not-export-col)",
              },
              customize: function (doc) {
                doc.defaultStyle.font = "NotoSansBengali";
                doc.styles.tableHeader.alignment = "left";
                doc.defaultStyle.alignment = "left";
                doc.styles.title = {
                  color: "green",
                  fontSize: "25",
                  alignment: "center",
                };
                doc.styles.tableHeader.margin =
                  doc.styles.tableBodyOdd.margin =
                  doc.styles.tableBodyEven.margin =
                    [5, 5, 5, 5];
                doc.content[1].table.widths = Array(
                  doc.content[1].table.body[0].length + 1
                )
                  .join("*")
                  .split("");
              },
            },
            {
              extend: "copyHtml5",
              text: "<i class='fas fa-copy'></i>  " + this.$t("Copy"),
              titleAttr: "Copy to clipboard",
              className: "btn btn-info btn-sm text-white",
              exportOptions: {
                columns: ":not(.not-export-col)",
              },
            },
            {
              extend: "colvis",
              text: "<i class='fas fa-th-large'></i>  " + this.$t("Column"),
              titleAttr: "Column visibility",
              className: "btn btn-success btn-sm text-white",
              exportOptions: {
                columns: ":not(.not-export-col)",
              },
            },
          ],
          language: datatablelanguage,
        });
      });
    },
    myServerDataTable(url, columns) {
      this.$nextTick(() => {
        $("#sampleTable").DataTable().clear().destroy();
        $("#sampleTable").DataTable({
          bDestroy: true,
          retrieve: true,
          responsive: true,
          processing: true,
          serverSide: true,
          destroy: true,
          pageLength: 10,
          order: [[0, "desc"]],
          ajax: {
            url: url,
            type: "GET",
            headers: {
              Authorization: "Bearer " + store.getters["user/getToken"],
            },
          },
          columns: columns,
          lengthMenu: [
            [10, 25, 50, 100, -1],
            [10, 25, 50, 100, "All"],
          ],
          dom:
            "<'row'<'col-sm-12 col-md-3'l><'col-sm-12 col-md-6 text-center'B><'col-sm-12 col-md-3'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
          buttons: [
            {
              extend: "print",
              text: "<i class='fas fa-print'></i> " + this.$t("Print"),
              titleAttr: "Print",
              className: "btn btn-success btn-sm text-white",
              exportOptions: {
                columns: ":not(.not-export-col)",
              },
            },
            {
              extend: "excelHtml5",
              text: "<i class='fas fa-file-excel'></i> " + this.$t("Excel"),
              titleAttr: "Export as Excel",
              className: "btn btn-primary btn-sm",
              exportOptions: {
                columns: ":not(.not-export-col)",
              },
            },
            {
              extend: "copyHtml5",
              text: "<i class='fas fa-copy'></i> " + this.$t("Copy"),
              titleAttr: "Copy to clipboard",
              className: "btn btn-info btn-sm text-white",
              exportOptions: {
                columns: ":not(.not-export-col)",
              },
            },
            {
              extend: "colvis",
              text: "<i class='fas fa-th-large'></i> " + this.$t("Column"),
              titleAttr: "Column visibility",
              className: "btn btn-success btn-sm text-white",
              exportOptions: {
                columns: ":not(.not-export-col)",
              },
            },
          ],
        });
      });
    },
    deleteConfirm() {
      return new Promise((resolve, reject) => {
        Swal.fire({
          title: this.$t("confirm_title"),
          text: this.$t("confirm_delete_message"),
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: this.$t("confirm"),
          cancelButtonText: this.$t("cancel"),
        }).then((result) => {
          if (result.isConfirmed) {
            resolve(true);
          }
        });
      });
    },
    validationWarning() {
      Swal.fire({
        icon: "warning",
        title: this.$t("error_alert_title"),
        text: this.$t("validation_fail_message"),
        timer: 3000,
        showConfirmButton: true,
        confirmButtonText: this.$t("ok"),
      });
    },
  },
});
