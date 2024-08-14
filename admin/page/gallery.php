<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Buttons</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>


<!-- Begin Page Content -->
<div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Tambah Gallery Foto</h1>

    <div class="row">
        <div class="col-lg-12">
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#galleryModal">
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Tambah Data
            </a>
        </div>


    </div>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Data Tabel Gallery</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Nama Pekerjaan</th>
                            <th>Lokasi</th>
                            <th>Tanggal Pekerjaan</th>
                            <th>Gambar Pekerjaan</th>
                            <th>Pilihan Opsi</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Nama Pekerjaan</th>
                            <th>Lokasi</th>
                            <th>Tanggal Pekerjaan</th>
                            <th>Gambar Pekerjaan</th>
                            <th>Pilihan Opsi</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <?php
                        $tampildata = mysqli_fetch_array(mysqli_query($connect, "SELECT * FROM jenis_pekerjaan"));
                        $tampil = mysqli_query($connect, "SELECT * FROM gallery");
                        while ($cetak = mysqli_fetch_array($tampil)) {
                        ?>
                            <tr>
                                <td><?php echo $cetak['nama']; ?></td>
                                <td><?php echo $cetak['lokasi']; ?></td>
                                <td><?php echo $cetak['tanggal']; ?></td>
                                <td><img src="../<?php echo $cetak['images']; ?>" alt="" width="50px"></td>
                                <td>
                                    <a href="?page=gallery&&id_gallery=
				<?php echo $cetak['id_gallery']; ?>&&proses=hapus" class="btn btn-danger">Hapus</a>
                                    <button class="btn btn-success">Edit</button>
                                </td>
                            </tr>
                        <?php
                        } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>

</div>
<!-- End of Main Content -->

<!-- Modal Tambah Data-->
<div class="modal fade" id="galleryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Tambah Data Gallery</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <?php
            $proses = mysqli_real_escape_string($connect, @$_GET['proses']);
            if ($proses == "simpan") {
                $id = @$_POST['id_pekerjaan'];
                $nama = @$_POST['nama'];
                $deskripsi = @$_POST['deskripsi'];
                $lokasi = @$_POST['lokasi'];
                $tanggal = @$_POST['tanggal'];
                $nama_gambar = @$_FILES['images']['name'];
                $tmp_gambar = @$_FILES['images']['tmp_name'];
                if (!empty($nama_gambar)) {
                    copy($tmp_gambar, "../images/$nama_gambar");
                }
                $simpan = mysqli_query($connect, "
    		INSERT INTO gallery(id_pekerjaan,nama,deskripsi,lokasi,tanggal,images) 
    		VALUES('$id','$nama','$deskripsi',
    		'$lokasi','$tanggal','images/$nama_gambar')");
                if ($simpan) {
                    echo "<h3>Input Data Berhasil</h3>";
                } else {
                    echo "<h3>Input Data Gagal</h3>";
                }
            }
            if ($proses == "hapus") {
                $id_gallery = mysqli_real_escape_string($connect, @$_GET['id_gallery']);
                $cekdata = mysqli_fetch_array(mysqli_query(
                    $connect,
                    "SELECT * FROM gallery WHERE 
    		id_gallery='$id_gallery'"
                ));
                unlink("../$cekdata[images]");
                $hapus = mysqli_query($connect, "DELETE FROM gallery WHERE 
    		id_gallery='$id_gallery'");
                if ($hapus) {
                    echo "<h3>Hapus Data Berhasil</h3>";
                } else {
                    echo "<h3>Hapus Data Gagal</h3>";
                }
            }
            ?>
            <form method="post" action="?page=gallery&&proses=simpan" enctype="multipart/form-data">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="nama" class="col-form-label">Nama Pekerjaan : </label>
                        <input type="text" class="form-control" id="nama" name="nama">
                    </div>
                    <div class="mb-3">
                        <label for="jenis-pekerjaan" class="col-form-label">Jenis Pekerjaan</label>
                        <select class="form-control" name="id_pekerjaan">
                            <?php
                            $jenis = mysqli_query(
                                $connect,
                                "SELECT * FROM jenis_pekerjaan"
                            );
                            while ($jenis1 = mysqli_fetch_array($jenis)) {
                            ?>
                                <option value="
					<?php echo $jenis1['id_pekerjaan']; ?>"><?php echo $jenis1['nama_pekerjaan']; ?></option>
                            <?php } ?>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="deskripsi" class="col-form-label">Deskripsi gambar : </label>
                        <textarea class="form-control" id="deskripsi" name="deskripsi"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="lokasi" class="col-form-label">Lokasi Pekerjaan : </label>
                        <input class="form-control" type="text" id="lokasi" name="lokasi">
                    </div>
                    <div class="mb-3">
                        <label for="tanggal" class="col-form-label">Tanggal Gambar</label>
                        <input class="form-control" type="date" id="tanggal" name="tanggal">
                    </div>
                    <div class="mb-3">
                        <label for="tanggal" class="col-form-label">Masukan Gambar</label>
                        <input class="form-control" type="file" accept="image/*" name="images">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary" type="submit">Simpan Data</button>
                </div>
            </form>
        </div>
    </div>
</div>

</body>

</html>