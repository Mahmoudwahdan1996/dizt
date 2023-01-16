<template>
  <div class="mt-15 aboutus" style="background-color: #fcfcfc">
    <h2 class="text-center pt-6">من نحن</h2>
    <div class="features-wrapper">
      <div class="features-content">
        <div
          class="features-description d-flex flex-column justify-center align-center"
        >
          <h3 class="text-weight-medium hidden-xs-only">انيقة وعملية</h3>
          <p class="mt-3 text-caption px-5 text-center hidden-xs-only">
            مع تقنية التثبيت بدلها وعيد ترتيبها مثل ما تحب فقط صمم ودز مشروعك
            واستمتع وعيش اللحظة
          </p>
          <v-btn small color="white primary--text mt-4 hidden-xs-only"
            ><v-icon>mdi-menu-right</v-icon> شاهد الفيديو
          </v-btn>
          <v-btn x-large color="white primary--text mt-4 hidden-sm-and-up "
            ><v-icon>mdi-menu-right</v-icon> شاهد الفيديو
          </v-btn>
        </div>
      </div>
      <div class="features-content--frame">
        <img src="@/assets/images/home/frame-home.png" />
      </div>
      <p class="text-center features-wrapper--text text-body-1 mt-5 pb-10">
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
        القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
        التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
        طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا
        يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من
        برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
        إفتراضي كنموذج عن النص
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutusPage",
};
</script>
