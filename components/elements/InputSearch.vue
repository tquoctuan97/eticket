<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout style="background-color:white; padding:30px 20px 0px 20px;">
        <v-flex xs12 md4>
          <v-text-field label="Search Event" light clearable style="margin:0; padding:0;"></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-select
            :items="category_items"
            label="Event Category"
            style="margin:0; padding:0;"
            :value="category_items[0]"
          ></v-select>
        </v-flex>
        <v-flex xs12 md4>
          <v-select
            :items="upcomming_items"
            label="Upcomming"
            style="margin:0; padding:0;"
            :value="upcomming_items[0]"
          ></v-select>
        </v-flex>
        <v-flex style="margin:0; padding:0;">
          <v-btn
            large
            depressed
            color="mycolor"
            style="margin:0; padding:0;"
            dark
            :disabled="dialog"
            :loading="dialog"
            @click="onSubmitSearch"
          >
            <v-icon>search</v-icon>
          </v-btn>
          <v-dialog v-model="dialog" hide-overlay persistent width="300">
            <v-card color="primary" dark>
              <v-card-text>
                Please stand by
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    valid: false,
    category_items: [
      "All Event",
      "Music",
      "Arts",
      "Business",
      "Parties",
      "Classes",
      "Sport",
      "Food",
      "Other"
    ],
    upcomming_items: ["On Any Date", "Today", "Tomorrow", "This Weekend"],
    data: [
      {
        id: 18,
        title:
          "ĐẠI NHẠC HỘI HỮU NGHỊ VIỆT HÀN | WE*FRIEND CONCERT IN VIET NAM 2019",
        address: "202 Hoàng Văn Thụ, Phường 2, Tân Bình, Hồ Chí Minh",
        locationName: "Sân vận động Quân khu 7",
        owner: "AppsCyclone",
        status: "Unpublish",
        category: "Music",
        contactNumber: "0348103321",
        contactPerson: "Trần Phát",
        description:
          '<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: "><strong style="box-sizing: border-box;">Đại nhạc hội hữu nghị Việt - H&agrave;n</strong>&nbsp;l&agrave; hoạt động giao lưu văn h&oacute;a thường kỳ, kh&ocirc;ng chỉ mang đến những m&agrave;n biểu diễn nghệ thuật truyền thống đặc trưng m&agrave; c&ograve;n quy tụ d&agrave;n nghệ sĩ nổi tiếng của cả hai nước. Mỗi năm BTC sẽ mời c&aacute;c ng&ocirc;i sao nổi tiếng Kpop biểu diễn với mục đ&iacute;ch tiếp nối tinh thần hội nhập quốc tế.</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: ">Chương tr&igrave;nh c&oacute; sự tham gia của 5 ng&ocirc;i sao nổi tiếng H&agrave;n Quốc: Bi Rain, nh&oacute;m Mamamoo, SF9, Pentagon,N.Flying v&agrave; 2 nghệ sỹ Việt Nam: T&oacute;c Ti&ecirc;n v&agrave; Noo Phước Thịnh.</p>\r\n',
        imageURL: "/eticket/assets/media/1557293726-AAA9EE.jpg",
        type: "1 day",
        start_time: "12",
        end_time: "7",
        start_date: "2019-05-09 00:00:00",
        end_date: "2019-05-09 00:00:00",
        url: "",
        created_at: {
          date: "2019-05-06 18:39:25.000000",
          timezone_type: 3,
          timezone: "UTC"
        },
        rating: 0,
        tickettype: {
          data: [
            {
              id: 24,
              name: "VIP Ticket",
              description: "",
              total: 0,
              status: "active",
              price: "999.00",
              created_at: {
                date: "2019-05-06 18:41:37.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-05-06 18:42:52.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 1,
              event_id: 18
            },
            {
              id: 23,
              name: "Diamon  Ticket",
              description: "",
              total: 27,
              status: "active",
              price: "30.00",
              created_at: {
                date: "2019-05-06 18:41:05.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-05-06 19:34:18.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 3,
              event_id: 18
            },
            {
              id: 22,
              name: "Gold Ticket",
              description: "",
              total: 20,
              status: "active",
              price: "20.00",
              created_at: {
                date: "2019-05-06 18:40:51.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-05-07 14:13:42.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 1,
              event_id: 18
            },
            {
              id: 21,
              name: "Common Ticket",
              description: "",
              total: 10,
              status: "active",
              price: "9.00",
              created_at: {
                date: "2019-05-06 18:40:34.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-05-07 14:19:12.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 1,
              event_id: 18
            }
          ]
        }
      },
      {
        id: 17,
        title: "ĐÊM NHẠC BEETHOVEN VÀ RACHMANINOV",
        address:
          "7 Công Trường Lam Sơn, phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh",
        locationName: "Nhà hát Tuổi Trẻ",
        owner: "AppsCyclone",
        status: "Unpublish",
        category: "Bussiness",
        contactNumber: "0348103321",
        contactPerson: "Trần Phát",
        description:
          '<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: "><strong style="box-sizing: border-box;">GIỚI THIỆU Đ&Ecirc;M NHẠC BEETHOVEN V&Agrave; RACHMANINOV</strong></p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: ">Bản concerto cho piano số 2 cung Đ&ocirc; thứ của S. Rachmaninov được xem l&agrave; một trong số &iacute;t những t&aacute;c phẩm đặc biệt nổi tiếng của thời kỳ &acirc;m nhạc L&atilde;ng mạn. T&aacute;c phẩm được y&ecirc;u mến khắp nơi tr&ecirc;n thế giới, được mọi nghệ sĩ piano t&agrave;i năng tr&ecirc;n thế giới y&ecirc;u th&iacute;ch lựa chọn để thể hiện t&agrave;i năng của m&igrave;nh v&agrave; &acirc;m nhạc của t&aacute;c phẩm đ&atilde; ảnh hưởng rộng khắp đời sống nghệ thuật đến tận ng&agrave;y nay, xuất hiện trong h&agrave;ng chục bộ phim nổi tiếng, l&agrave; nguồn cảm hứng cho h&agrave;ng trăm t&aacute;c phẩm nghệ thuật kh&aacute;c như m&uacute;a, kịch, h&ograve;a tấu, ca kh&uacute;c, chương tr&igrave;nh truyền h&igrave;nh &hellip; T&aacute;c phẩm n&agrave;y sẽ được tr&igrave;nh diễn bởi nghệ sĩ piano xuất sắc B&iacute;ch Tr&agrave; c&ugrave;ng D&agrave;n nhạc Giao hưởng HBSO trong Đ&ecirc;m nhạc Beethoven v&agrave; Rachmaninov.</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: ">Với &acirc;m nhạc của thi&ecirc;n t&agrave;i vĩ đại Ludwig van Beethoven, ch&uacute;ng ta sẽ c&oacute; cơ hội thưởng thức Bản giao hưởng số 7 cung La trưởng, t&aacute;c phẩm được Beethoven tự đ&aacute;nh gi&aacute; l&agrave; &quot;Một trong những t&aacute;c phẩm tốt nhất của t&ocirc;i&quot;. Một t&aacute;c phẩm g&acirc;y chấn động ngay từ lần ra mắt đầu ti&ecirc;n năm 1813 tại Vienna, t&aacute;c phẩm c&ograve;n được biết đến với t&ecirc;n gọi &quot;Anh h&ugrave;ng ca&quot; (Eroica).</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: ">Chương tr&igrave;nh được d&agrave;n dựng v&agrave; chỉ huy bởi nhạc trưởng, NSUT Trần Vương Thạch.</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: ">&nbsp;</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: "><strong style="box-sizing: border-box;">A NIGHT OF BEETHOVEN AND RACHMANINOV</strong></p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: ">The Concerto for piano No. 2 in C minor by S. Rachmaninov is considered one of the few famous special works of the Romantic music era. The work is loved all over the world. Especially, all the talented pianists worldwide usually choose this work to show their talents and the music of the work has continued its influence up till now: appearing in dozens of famous films, becoming the inspiration for hundreds of other works of art such as dance, drama, concert, song, TV show ... This work will be performed by the great pianist Bich Tra and HBSO Symphony Orchestra in Beethoven and Rachmaninov Music Night.</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: ">With the music of the genius Ludwig van Beethoven, we will have the opportunity to enjoy the Symphony No. 7 in A minor, which Beethoven himself judged as &quot;One of my best works&quot;. A work that caused a shocking impression from its first debut in 1813 in Vienna, the work is also known as Eroica.</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: ">The performance is under the baton of conductor, Meritorious Artist Tran Vuong Thach.</p>\r\n',
        imageURL: "/eticket/assets/media/1557293751-93BEBC.jpg",
        type: "A half of day",
        start_time: "4",
        end_time: "20",
        start_date: "2019-05-09 00:00:00",
        end_date: "2019-05-09 00:00:00",
        url: "",
        created_at: {
          date: "2019-05-05 19:18:51.000000",
          timezone_type: 3,
          timezone: "UTC"
        },
        rating: 0,
        tickettype: {
          data: [
            {
              id: 17,
              name: "Free Ticket",
              description: "",
              total: 9,
              status: "active",
              price: "0.00",
              created_at: {
                date: "2019-05-05 19:19:18.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-05-07 18:11:37.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 2,
              event_id: 17
            },
            {
              id: 19,
              name: "Gold Ticket",
              description: "",
              total: 10,
              status: "active",
              price: "10.00",
              created_at: {
                date: "2019-05-05 19:52:05.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-05-05 19:52:05.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 0,
              event_id: 17
            },
            {
              id: 20,
              name: "VIP Ticket",
              description: "",
              total: 3,
              status: "active",
              price: "100.00",
              created_at: {
                date: "2019-05-05 19:52:20.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-05-07 19:32:41.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 1,
              event_id: 17
            },
            {
              id: 18,
              name: "Common Ticket",
              description: "",
              total: 3,
              status: "active",
              price: "5.00",
              created_at: {
                date: "2019-05-05 19:51:43.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-05-07 19:35:33.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 2,
              event_id: 17
            }
          ]
        }
      },
      {
        id: 16,
        title:
          "YAMAHA PRESENTS RAVOLUTION MUSIC FESTIVAL 2019 | ARISE CHAPTER 25.05.2019  HO CHI MINH CITY",
        address: "Thủ Thiêm, District 2, Ho Chi Minh City 700000",
        locationName: "Empire City Thủ Thiêm",
        owner: "AppsCyclone",
        status: "Unpublish",
        category: "Bussiness",
        contactNumber: "0348103321",
        contactPerson: "Trần Phát",
        description:
          '<p background-color:="" color:="" font-size:="" montserrat="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: ">Con t&agrave;u &lsquo;RAVOLUTION&rsquo; tr&ecirc;n h&agrave;nh tr&igrave;nh vũ trụ t&igrave;m kiếm &lsquo;RAVOLAND&rsquo;, đ&atilde; gặp phải rất nhiều kh&oacute; khăn. Ngay cả &lsquo;RAVO ELEMENT&rsquo; &ndash; linh hồn của con t&agrave;u được con người tạo ra để gi&uacute;p họ sống s&oacute;t v&agrave; t&igrave;m kiếm v&ugrave;ng đất mới cũng đ&atilde; phải đưa ra những biện ph&aacute;p sống c&ograve;n để duy tr&igrave; nguồn sống mong manh.</p>\r\n\r\n<p background-color:="" color:="" font-size:="" montserrat="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: ">V&agrave; trong cơn tuyệt vọng, một tia s&aacute;ng hy vọng lo&eacute; l&ecirc;n. &lsquo;RAVO ELEMENT&rsquo; đ&atilde; ph&aacute;t hiện 1 nguồn năng lượng mới mang t&ecirc;n YAMAHA, hội đủ điều kiện gi&uacute;p RAVOLUTION phục hồi to&agrave;n bộ năng lượng đ&atilde; mất, l&agrave;m sống dậy những tr&aacute;i tim đầy nhiệt huyết v&agrave; đam m&ecirc;. Một v&ugrave;ng đất mới đ&atilde; &lsquo;TRỖI DẬY&rsquo;. - EMPIRE CITY.</p>\r\n\r\n<p background-color:="" class="note" color:="" font-size:="" montserrat="" style="box-sizing: border-box; margin: 1em 0px 10px; font-family: ">*Sự kiện d&agrave;nh cho kh&aacute;n giả từ 18 tuổi trở l&ecirc;n. Vui l&ograve;ng xuất tr&igrave;nh giấy CMND khi đến tham gia sự kiện.</p>\r\n',
        imageURL: "/eticket/assets/media/1557293771-banner@4x.jpg",
        type: "1 day",
        start_time: "5",
        end_time: "21",
        start_date: "2019-05-14 00:00:00",
        end_date: "2019-05-18 00:00:00",
        url: "",
        created_at: {
          date: "2019-05-05 19:07:46.000000",
          timezone_type: 3,
          timezone: "UTC"
        },
        rating: 0,
        tickettype: {
          data: [
            {
              id: 16,
              name: "Free Ticket",
              description: "",
              total: 6,
              status: "active",
              price: "0.00",
              created_at: {
                date: "2019-05-05 19:10:02.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-05-08 03:36:18.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 18,
              event_id: 16
            }
          ]
        }
      },
      {
        id: 15,
        title: "TALENT WARS",
        address: "63 Nguyễn Huệ, Quận 1, Thành Phố Hồ Chí Minh",
        locationName: "SaiGon Prince Hotel",
        owner: "AppsCyclone",
        status: "Unpublish",
        category: "Bussiness",
        contactNumber: "123456789",
        contactPerson: "THE BEAUTIFUL MIND CONSULTING",
        description:
          '<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:="">H&atilde;y c&ugrave;ng kh&aacute;m ph&aacute; mối quan hệ v&agrave; những t&aacute;c động của chiến lược quản trị t&agrave;i năng đối với sự th&agrave;nh c&ocirc;ng của chiến lược kinh doanh, khả năng gia tăng lợi thế cạnh tranh v&agrave; hiệu quả kinh doanh tại chương tr&igrave;nh huấn luyện qua m&ocirc; phỏng kinh doanh chủ đề &ldquo;Talent Wars - Cuộc chiến nh&acirc;n t&agrave;i&rdquo;</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:=""><strong style="box-sizing: border-box;">Chương tr&igrave;nh l&agrave; nơi cung cấp c&aacute;c giải ph&aacute;p:&nbsp;</strong></p>\r\n\r\n<ul font-size:="" open="" style="box-sizing: border-box; margin-top: 0px; margin-bottom: 10px; font-family: ">\r\n\t<li style="box-sizing: border-box; text-align: justify;">Ph&aacute;t triển b&iacute; quyết kinh doanh dựa tr&ecirc;n năng lực đội ngũ&nbsp;</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Gia tăng lợi thế cạnh tranh bằng thu h&uacute;t đ&uacute;ng nh&acirc;n sự v&agrave; đ&uacute;ng kh&aacute;ch h&agrave;ng</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Tối ưu h&oacute;a lợi nhuận v&agrave; quản l&yacute; d&ograve;ng tiền trong quản trị t&agrave;i năng&nbsp;</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Quản trị v&agrave; gia tăng t&agrave;i sản v&ocirc; h&igrave;nh của doanh nghiệp&nbsp;</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Khai th&aacute;c c&aacute;c b&aacute;o c&aacute;o t&agrave;i ch&iacute;nh trong c&ocirc;ng t&aacute;c quản trị nguồn lực v&agrave; nh&acirc;n t&agrave;i</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">X&acirc;y dựng văn h&oacute;a, m&ocirc;i trường ph&aacute;t triển v&agrave; duy tr&igrave; nh&acirc;n t&agrave;i&nbsp;</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">X&acirc;y dựng chiến lược quản trị nh&acirc;n t&agrave;i ph&ugrave; hợp tầm nh&igrave;n, chiến lược, mục ti&ecirc;u kinh doanh&nbsp;</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Ngăn đối thủ gi&agrave;nh mất kh&aacute;ch h&agrave;ng v&agrave; săn nh&acirc;n t&agrave;i&nbsp;</li>\r\n</ul>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:=""><br style="box-sizing: border-box;" />\r\n<strong style="box-sizing: border-box;">Phương ph&aacute;p chuyển tải nội dung:</strong></p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:="">Với phương ch&acirc;m &ldquo;Học qua trải nghiệm&rdquo;, chương tr&igrave;nh được thiết kế xuy&ecirc;n suốt l&agrave; hoạt động trải nghiệm nhằm tạo cơ hội cho người tham dự chủ động học hỏi bằng c&aacute;ch vận dụng kiến thức, kinh nghiệm vốn c&oacute;, tham vọng, sự ham học hỏi v&agrave; mong muốn đ&aacute;nh gi&aacute; sự việc từ g&oacute;c nh&igrave;n mới nhằm ph&aacute;t triển một chuẩn mực tham khảo mới cho ch&iacute;nh m&igrave;nh cũng như c&aacute;c đề xuất &aacute;p dụng trong hoạt động thực tế của doanh nghiệp.&nbsp;</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:="">Qua việc xử l&yacute; c&aacute;c t&igrave;nh huống &ldquo;đắt gi&aacute;&rdquo; trong qu&aacute; tr&igrave;nh m&ocirc; phỏng kinh doanh, người tham dự sẽ trang bị được c&aacute;c kiến thức gi&uacute;p n&acirc;ng cao năng lực triển khai &aacute;p dụng trong c&aacute;c hoạt động gia tăng hiệu quả kinh doanh v&agrave; tạo lợi thế cạnh tranh cho doanh nghiệp.<br style="box-sizing: border-box;" />\r\n&nbsp;</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:=""><strong style="box-sizing: border-box;">Chương tr&igrave;nh l&yacute; tưởng:</strong></p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:="">Với c&aacute;c vị tr&iacute; quản l&yacute; tham gia v&agrave;o qu&aacute; tr&igrave;nh hoạch định chiến lược kinh doanh, chiến lược quản l&yacute; v&agrave; chiến lược ph&aacute;t triển nguồn nh&acirc;n lực v&agrave; nh&acirc;n t&agrave;i của doanh nghiệp:</p>\r\n\r\n<ul font-size:="" open="" style="box-sizing: border-box; margin-top: 0px; margin-bottom: 10px; font-family: ">\r\n\t<li style="box-sizing: border-box; text-align: justify;">Gi&aacute;m đốc dự &aacute;n</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Gi&aacute;m đốc đ&agrave;o tạo&nbsp;</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Quản l&yacute; cấp cao v&agrave; cấp trung</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Đội ngũ hoạch định chiến lược&nbsp;</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Gi&aacute;m đốc ph&aacute;t triển nguồn nh&acirc;n lực</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Gi&aacute;m đốc ph&aacute;t triển bộ m&aacute;y tổ chức&nbsp;</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Ban l&atilde;nh đạo tổ chức/doanh nghiệp&nbsp;</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Chủ doanh nghiệp</li>\r\n\t<li style="box-sizing: border-box; text-align: justify;">Nh&agrave; tư vấn chuy&ecirc;n m&ocirc;n cho doanh nghiệp&nbsp;</li>\r\n</ul>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:=""><strong style="box-sizing: border-box;">&Yacute; kiến kh&aacute;ch h&agrave;ng:</strong></p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:="">&ldquo;Qua chương tr&igrave;nh, ch&uacute;ng t&ocirc;i nhận thấy cần ph&aacute;t triển quan hệ kh&aacute;ch h&agrave;ng một c&aacute;ch t&iacute;ch cực v&agrave; chủ động trao đổi th&ocirc;ng tin, chia sẻ kiến thức. Điều n&agrave;y gi&uacute;p ch&uacute;ng t&ocirc;i ph&aacute;t triển v&agrave; giới thiệu sản phẩm mới đi trước đối thủ&rdquo;. VP Human Resources, MTN</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:="">&ldquo;Chương tr&igrave;nh l&agrave; nơi thực nghiệm kiến thức tuyệt vời v&agrave; c&oacute; ảnh hưởng t&iacute;ch cực đến hoạt động quản l&yacute; kinh doanh của ch&uacute;ng t&ocirc;i. Chương tr&igrave;nh đ&atilde; gi&uacute;p ch&uacute;ng t&ocirc;i x&aacute;c định cũng như quản l&yacute; c&aacute;c yếu tố th&agrave;nh c&ocirc;ng then chốt dựa tr&ecirc;n kiến thức quản trị doanh nghiệp v&agrave; định lượng kết quả của c&aacute;c quyết định.&rdquo; Worldwide General Manager, HP</p>\r\n\r\n<p font-size:="" open="" overflow-wrap:="" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: " text-align:="">&ldquo;Những trải nghiệm trong qu&aacute; tr&igrave;nh m&ocirc; h&igrave;nh m&ocirc; phỏng kinh doanh đ&atilde; gi&uacute;p đội ngũ của ch&uacute;ng t&ocirc;i x&acirc;y dựng được tiếng n&oacute;i chung v&agrave; cải thiện ho&agrave;n to&agrave;n truyền th&ocirc;ng nội bộ. Chương tr&igrave;nh l&agrave; khoảng thời gian qu&yacute; gi&aacute; đối với đội ngũ của ch&uacute;ng t&ocirc;i bởi kinh nghiệm c&oacute; được thực sự c&oacute; thể &aacute;p dụng v&agrave;o thực tiễn kinh doanh&rdquo;. Nophadon Reungchinda, Managing Director, Thanachart Insurance</p>\r\n',
        imageURL: "/eticket/assets/media/1557293794-D7E2D4.jpg",
        type: "1 day",
        start_time: "13",
        end_time: "17",
        start_date: "2019-05-09 00:00:00",
        end_date: "2019-05-09 00:00:00",
        url: "",
        created_at: {
          date: "2019-05-04 10:59:00.000000",
          timezone_type: 3,
          timezone: "UTC"
        },
        rating: 0,
        tickettype: {
          data: [
            {
              id: 15,
              name: "Free Ticket",
              description: "",
              total: 198,
              status: "active",
              price: "0.00",
              created_at: {
                date: "2019-05-04 11:01:13.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-05-05 18:06:45.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 2,
              event_id: 15
            }
          ]
        }
      },
      {
        id: 13,
        title: " ĐÀI QUAN SÁT SAIGON SKYDECK",
        address: "Tòa tháp Bitexco Financial Tower",
        locationName: "Tòa tháp Bitexco Financial Tower",
        owner: "AppsCyclone",
        status: "Upcoming",
        category: "Bussiness",
        contactNumber: "0348103321",
        contactPerson: "Trần Phát",
        description:
          '<p>&nbsp;</p>\r\n\r\n<p><span style="box-sizing: border-box; font-weight: 700; font-family: Roboto, sans-serif; font-size: 16px; text-align: center; background-color: rgb(241, 241, 241);">T&ograve;a th&aacute;p Bitexco Financial Tower</span><span style="font-family: Roboto, sans-serif; font-size: 16px; text-align: center; background-color: rgb(241, 241, 241);">&nbsp;ở độ cao 262 m&eacute;t so với mặt đất, hiện l&agrave; t&ograve;a nh&agrave; cao nhất th&agrave;nh phố Hồ Ch&iacute; Minh hiện nay. Với &yacute; tưởng thiết kế được lấy từ h&igrave;nh d&aacute;ng&nbsp;</span><span style="box-sizing: border-box; font-weight: 700; font-family: Roboto, sans-serif; font-size: 16px; text-align: center; background-color: rgb(241, 241, 241);">b&uacute;p sen</span><span style="font-family: Roboto, sans-serif; font-size: 16px; text-align: center; background-color: rgb(241, 241, 241);">&nbsp;- lo&agrave;i quốc hoa của Việt Nam, Bitexco Financial Tower kh&ocirc;ng chỉ đơn thuần l&agrave; một t&ograve;a nh&agrave; được bao bọc bởi k&iacute;nh v&agrave; th&eacute;p, m&agrave; c&ograve;n l&agrave;&nbsp;</span><span style="box-sizing: border-box; font-weight: 700; font-family: Roboto, sans-serif; font-size: 16px; text-align: center; background-color: rgb(241, 241, 241);">biểu tượng</span><span style="font-family: Roboto, sans-serif; font-size: 16px; text-align: center; background-color: rgb(241, 241, 241);">&nbsp;cho vẻ đẹp v&agrave; sự ph&aacute;t triển nhanh ch&oacute;ng của nền kinh tế của th&agrave;nh phố Hồ Ch&iacute; Minh, v&ugrave;ng kinh tế trọng điểm của Việt Nam. T&ograve;a th&aacute;p Bitexco l&agrave; một minh chứng điển h&igrave;nh cho sự s&aacute;ng tạo v&agrave; thiết kế đặc sắc vượt bậc.</span></p>\r\n',
        imageURL: "/eticket/assets/media/1557293817-575B8E.jpg",
        type: "A half of day",
        start_time: "9",
        end_time: "17",
        start_date: "2019-05-30 00:00:00",
        end_date: "2019-05-30 00:00:00",
        url: "",
        created_at: {
          date: "2019-04-13 13:56:22.000000",
          timezone_type: 3,
          timezone: "UTC"
        },
        rating: 5,
        tickettype: {
          data: [
            {
              id: 11,
              name: "VIP Ticket",
              description: "",
              total: 3,
              status: "active",
              price: "100.00",
              created_at: {
                date: "2019-04-13 13:58:29.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-04-13 13:58:29.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 0,
              event_id: 13
            },
            {
              id: 9,
              name: "Free Ticket",
              description: "",
              total: 5,
              status: "active",
              price: "0.00",
              created_at: {
                date: "2019-04-13 13:57:32.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-04-22 13:49:40.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 3,
              event_id: 13
            },
            {
              id: 10,
              name: "Common Ticket",
              description: "",
              total: 9,
              status: "active",
              price: "5.00",
              created_at: {
                date: "2019-04-13 13:58:13.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              updated_at: {
                date: "2019-04-25 13:51:15.000000",
                timezone_type: 3,
                timezone: "UTC"
              },
              ticket_bought: 1,
              event_id: 13
            }
          ]
        }
      }
    ]
  }),
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => {
        this.dialog = false;
        this.$emit("search", this.data);
      }, 3000);
    }
  },
  methods: {
    onSubmitSearch() {
      this.dialog = true;
      setTimeout(() => {
        this.$emit("search", this.data);
      }, 1000);

      // axios
      //   .post(
      //     "https://eticket-vhu.herokuapp.com/api/v1/eticket/search-event?limit=6&page=1"
      //     // {
      //     //   keyword: this.keyword,
      //     //   time: this.time,
      //     //   category_id: this.category_id
      //     // }
      //   )
      //   .then(response => {
      //   });
    }
  }
};
</script>

<style>
.v-text-field--outline > .v-input__control > .v-input__slot {
  background-color: white;
}
</style>
