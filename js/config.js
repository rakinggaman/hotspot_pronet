const config = {
  loginMethod: {
    member: false,
    voucher: true,
    qrCode: true,
    default: "voucher", // member, voucher, qrCode
  },
  qrCodeScannerURL: "https://qrcodescan.in/",
  expiredChecker: {
    active: false,
    URL: "https://example.com/v1/expired",
    token: "69ee773d4xxxxxxxx:00628cdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  prayTime: {
    // lihat di https://github.com/benangmerah/wilayah/blob/master/datasources/daftar-nama-daerah.csv
    // default menggunakan Provinsi Jakarta
    latitude: -6.211544,
    longtitude: 106.845172,
  },
};

export default config;
