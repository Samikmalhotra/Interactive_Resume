import React, { Fragment } from 'react'

const Achievements = () => {
    return (
       <Fragment>
           <div class="achievements">
    {/* <a name="achievements"></a> */}
    <div class="main">
      <h1 class="main-heading" data-aos="fade-right" data-aos-duration="1000">Achievements</h1>
      <i>
        <h4  class="subs" data-aos="fade-right" data-aos-duration="1000">"I was raised to treat the janitor with<br />the same respect as that of a CEO"</h4>
      </i>
      <hr class="main-hr"/>
    </div>
    <div class="row achievement-margin" >
      <div class="col-md-6 col-lg-4 trophy text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300">
        <i class="fa fa-trophy fa-5x"></i><br />
        <p class="achievements-para">
          Won 5th in Indo-Korean Youth Film Festival
        </p>


      </div>
      <div class="col-md-6 col-lg-4 gradcap text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="450">
        <i class="fa fa-graduation-cap fa-5x"></i>
        <p class="achievements-para">
          Achieved 96.5% in Class 12th Board exam
        </p>

      </div>
      <div class="col-md-6 col-lg-4 gradcap text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="600">
        <i class="fa fa-graduation-cap fa-5x"></i>
        <p class="achievements-para">
          Achieved 97% in Class 10th Board exam
        </p>

      </div>



      <div class="col-md-6 col-lg-4 check-circle text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="750">
        <i class="fa fa-check-circle fa-5x"></i>
        <p class="achievements-para">
          Inter Zonal Football Player
        </p>

      </div>
      <div class="col-md-6 col-lg-4 check-circle text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="900">
        <i class="fa fa-check-circle fa-5x"></i>
        <p class="achievements-para">
          Inter Zonal Swimmer
        </p>

      </div>
      <div class="col-md-6 col-lg-4 check-circle text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1050">
        <i class="fa fa-check-circle fa-5x"></i>
        <p class="achievements-para">
          Zonal Basketball Player

        </p>
      </div>

    </div>
  </div>
       </Fragment>
    )
}

export default Achievements
