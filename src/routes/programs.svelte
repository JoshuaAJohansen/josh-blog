<script>
  import Program from "../components/Program.svelte";
  const IOS = "ios";
  const ANDROID = "android";
  /**
   * Determine the mobile operating system.
   * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
   *
   * @returns {String}
   */
  function getMobileOperatingSystem() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
      return ANDROID;
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return IOS;
    }
    return "unknown";
  }
  console.log(getMobileOperatingSystem());
  let os = getMobileOperatingSystem();
</script>

<h1>Programs I Wish I Built</h1>
<p>
  This is inspired by Alicia Keys performance
  <a href="https://www.youtube.com/watch?v=tPbwJQ1XR4c">Songs I Wish I Wrote</a>
  . It is a reminder of the programs that live in us all. They serve as a
  reminder of what is possible. It is a compilation of programs that are
  beautiful, brilliant, and bettering humanity. Some I use personally use, and
  others are here as a reminder on my journey of software craftsmanship. What
  future world can we dream up and how can we create the solutions together to
  achieve that vision? For example, Be My Eyes helps blind people see. You can
  join as an active part in that solution. Another example is Netflix's
  Metaflow. Metaflow allows datascientists to effortlessly ship into production
  machine learning models that are reproducible, and testable. If you live in
  San Francisco, check out Friends of the Urban Forst. They'll work with you to
  plant a tree for you in front of your house. It's good. They also have reasons
  why trees are good if you haven't heard all of the great benefits.
</p>

<h1>Programs</h1>
<!-- <Program href={`https://www.bemyeyes.com/${os === IOS ? ''}`} description={'be my eyes'} /> -->
{#if os === IOS}
  <Program
    href={'https://apps.apple.com/us/app/be-my-eyes-helping-blind-see/id905177575'}
    description={'be my eyes'} />
{:else if os === ANDROID}
  <Program
    href={'https://play.google.com/store/apps/details?id=com.bemyeyes.bemyeyes'}
    description={'be my eyes'} />
{:else}
  <Program href={'https://www.bemyeyes.com/'} description={'be my eyes'} />
{/if}
<Program
  href={'https://www.youtube.com/watch?v=XV5VGddmP24'}
  description={'Metaflow - Human Centric Machine Learning Infrastructure'} />
<Program
  href={'https://www.fuf.net'}
  description={'Friends of the Urban Forest'} />
<Program href={'https://www.jetbrains.com/pycharm/'} description={'Pycharm'} />
<Program href={'https://git-scm.com/'} description={'Git'} />
<Program href={'https://www.netlify.com/'} description={'Netlify'} />
<Program href={'https://12factor.net/'} description={'The Twelve-Factor App'} />
<Program href={'https://cubev3.com'} description={'Cube V3'} />
<Program
  href={'https://applitools.com/ultrafast-grid'}
  description={'Applitools Ultrafast Grid'} />
<Program
  href={'https://3.python-requests.org/'}
  description={'Requests III: HTTP for Humans and Machines, alike.'} />
<Program
  href={'https://www.rookout.com/'}
  description={'Rookout - Virtual Logging'} />
<Program
  href={'https://apps.apple.com/us/app/divvy-window-manager/id413857545?aosid=p239&cid=aos-us-aff-ir&clickid=1TyToXSl1xyJT4NwUx0Mo34nUknzinxJQxl9SI0&irchannel=13631&ircid=7613&irgwc=1&irpid=27795&mt=12'}
  description={'Divvy'} />
<h1>
  Connect with me on
  <a href="https://github.com/senofjohan/">github</a>
  and let's build more programs.
</h1>