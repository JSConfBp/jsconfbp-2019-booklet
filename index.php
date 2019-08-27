<?php include 'site_header.php'; ?>

    <section class="schedule">
        <div class="days">
            <a class="days_link" href="#">Day 1</a>
            <a class="days_link inactive" href="#">Day 2</a>
        </div>
        
        <?php 
            for ($i = 0; $i < 5; $i++) {
                include '/src/components/presentation_card.php';
            }
        ?>
    </section>

<?php include 'site_footer.php'; ?>